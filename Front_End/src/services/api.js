import axios from "axios"; //Importa o axios

const api = axios.create({
    baseURL: "http://localhost:3000/api" //Define a URL da api
});

export default api;