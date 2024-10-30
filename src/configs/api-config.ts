import axios, { AxiosError, AxiosResponse } from "axios";

import setAxiosHeader from "utils/set-axios-header";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

axiosInstance.interceptors.request.use(
    config => setAxiosHeader(config),
    error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        if (error?.response?.status === 401) { };
        return Promise.reject(error?.response?.data);
    }
);
export default axiosInstance;