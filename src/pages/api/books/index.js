import axios from 'axios';

const books = async (req, res) => {
    const { data: { books } } = await axios.get('http://localhost:3002/api/books');
    res.status(200).json(books);
}

export default books;