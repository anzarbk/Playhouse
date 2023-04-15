import axios from 'axios';
import baseURL from '../APIs/BaseUrl';

const express = axios.create({
  baseURL: baseURL,
});
export default express;
