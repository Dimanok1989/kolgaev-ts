import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_SERVER}/`,
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {

    const token: string | null = localStorage.getItem('k_access_token');

    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`
    }

    return config;

});

export default instance;