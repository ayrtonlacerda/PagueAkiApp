import axios from 'axios';

export default axios.create({
  baseURL: 'http://138.197.13.119:3333',
  headers: {
    'Content-Type': 'application/json',
  },
});
