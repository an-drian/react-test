import axios from 'axios';

const network = axios.create({
  withCredentials: true,
  timeout: 1000,
  xsrfCookieName: 'CSRF-TOKEN',
  xsrfHeaderName: 'X-CSRF-Token'
});

export default network;
