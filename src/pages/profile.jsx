import React from 'react';

import axios from 'axios';

import Profile from '../components/Profile/Profile';

export async function getServerSideProps({ req }) {
    const { cookie } = req.headers;

    if(!cookie || cookie === undefined) {
        return res.status(403).json({ message: 'No estás autorizado.' });
    } else {
        const accessToken = cookie.replace('access_token=', '');
        const { data: {
            userProfile,
            bookReaded,
            bookReading,
            bookToRead,
            abandonedBook
        } } = await axios.get(
            'http://localhost:3000/api/user-profile',
            {
                headers: {
                    Authorization: `Bearer ${ accessToken }`,
                }
            }
        );

        return {
            props: {
                userProfile,
                books: [
                    bookReaded,
                    bookReading,
                    bookToRead,
                    abandonedBook
                ]

            }
        }
    }
}

const UserProfile = ({ userProfile, books }) => (
    <Profile
        userProfile={ userProfile }
        books={ books }
    />
);

export default UserProfile;