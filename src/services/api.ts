import axios from 'axios';

const api = axios.create({
    baseURL: 'https://server-json-sch2.onrender.com',

});
export default api;