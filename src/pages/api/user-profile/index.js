import axios from 'axios';

const userProfile = async (req, res) => {
    const { authorization } = req.headers;

    if(authorization !== undefined && !Array.isArray(authorization)) {
        const accessToken = authorization.replace('Bearer ', '');
        const { data: {
            userProfile,
            bookReaded,
            bookReading,
            bookToRead,
            abandonedBook
        } } = await axios.get('http://localhost:3002/api/user-profile', {
            headers: {
                Authorization: `Bearer ${ accessToken }`,
            }
        });

        return res.status(200).json({
            userProfile,
            userProfile,
            bookReaded,
            bookReading,
            bookToRead,
            abandonedBook
        });
    } else {
        return res.status(403).json({ message: 'No estás autorizado.' });
    }
}

export default userProfile;