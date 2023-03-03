import axios from 'axios';
import baseURL from '../api/baseUrl';

const instance = axios.create({
  baseURL: baseURL,
});
export default instance;
