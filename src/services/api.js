import axios from 'axios';

const api = axios.create({
    baseURL: 'https://unplanted-loni-ambitionlessly.ngrok-free.dev:3000/api',
});

export default api;
