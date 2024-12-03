import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_BASE_URL } from '../constants';

const httpClient = axios.create({
   baseURL: API_BASE_URL,
});

httpClient.interceptors.request.use(
   (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      return config;
   },
);

httpClient.interceptors.response.use(
   (response: AxiosResponse) => response,
   (error: AxiosError) => {
      if (error.response && error.response.status === 401) {
         console.log('401 error');
      }
      return Promise.reject(error);
   },
);

export default httpClient;
