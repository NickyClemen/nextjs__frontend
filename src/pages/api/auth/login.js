import axios from 'axios';

import cookie from 'cookie';

import Config from '../../../config';
const { signInUrl: URL_SIGN_IN } = new Config();

const PROD = process.env.NODE_ENV !== 'development';
const FIFTEEN_MINUTES = new Date(new Date().getTime() + 15 * 60 * 1000);

const login = async (req, res) => {
    const { body: { username, password } } = req;

    try {
        const basicAuth = Buffer.from(`${ username }:${ password }`).toString('base64');

        const { data } = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:3001/api/auth/sign-in',
            data: {},
            headers: { Authorization: `Basic ${ basicAuth }` },
        });

        if(data) {
            const { access_token } = data;

            res.setHeader('Set-Cookie', cookie.serialize('access_token', access_token, {
                httpOnly: true,
                sameSite: 'strict',
                expires: FIFTEEN_MINUTES,
                secure: PROD,
                path: '/',
                omain: 'localhost:3000',
            }));

            res.status(200).json({ success: true });
        }
    } catch(error) {
        console.log(error)
        res.status(401).json({ success: false });
    }
};

export default login;