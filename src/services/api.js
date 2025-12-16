import axios from 'axios';

const api = axios.create({
    baseURL: ' https://unplanted-loni-ambitionlessly.ngrok-free.dev/api',
});

export default api;
