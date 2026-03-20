import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("VITE_API_BASE_URL no está definido");
}

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Interceptors para manejar errores globalmente
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    return Promise.reject(error);
  }
);

export default api;