import axios from 'axios';

const network = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  withCredentials: true,
  timeout: 1000,
  xsrfCookieName: 'CSRF-TOKEN',
  xsrfHeaderName: 'X-CSRF-Token',
  headers: {
    'Accept': 'application/json'
  }
});

export default network;
