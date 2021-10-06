import axios from 'axios';

import Config from '../../config';
const { loginUrl } = new Config();

export async function login(user) {
    const { data: { success } } = await axios.post('/api/auth/login', user);
    return success;
}

/* async function logout() {
    return await axios.get(RelativeUrl.AUTH_LOGOUT);
} */

