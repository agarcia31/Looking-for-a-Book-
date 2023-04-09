import axios from 'axios';

export const getMeQuery = async (token) => {
  const response = await axios.get('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const searchGoogleBooksQuery = async (query) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  return response.data;
};
