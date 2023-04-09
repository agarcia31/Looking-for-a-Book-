import axios from 'axios';

export const createUserMutation = async (userData) => {
  const response = await axios.post('/api/users', userData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

export const loginUserMutation = async (userData) => {
  const response = await axios.post('/api/users/login', userData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

export const saveBookMutation = async (bookData, token) => {
  const response = await axios.put('/api/users', bookData, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const deleteBookMutation = async (bookId, token) => {
  const response = await axios.delete(`/api/users/books/${bookId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
