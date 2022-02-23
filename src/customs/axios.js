import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';

export default axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
