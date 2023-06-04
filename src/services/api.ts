import axios from 'axios';

//const apiUrl =import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: "https://site-pessoal-api-ii2n.onrender.com/api",
    

});
export default api;