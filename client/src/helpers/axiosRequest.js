import axios from 'axios';

export const axiosRequest = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:8000/api'
});
