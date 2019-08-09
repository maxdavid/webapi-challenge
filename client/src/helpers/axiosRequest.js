import axios from 'axios';

export const axiosRequest = axios.create({
  baseURL: process.env.NODE_ENV || 'http://localhost:8000/api'
});
