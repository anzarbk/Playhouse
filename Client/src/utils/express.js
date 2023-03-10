import axios from 'axios';
import baseURL from '../api/baseUrl';

const express = axios.create({
  baseURL: baseURL,
});
export default express;
