import axios from 'axios';

function baseUrl() {
  return '/api';
}

axios.defaults.baseURL = baseUrl();

export default axios;
