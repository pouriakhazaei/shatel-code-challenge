import { InternalAxiosRequestConfig } from "axios";

const setAxiosHeader = (config: InternalAxiosRequestConfig<unknown>): InternalAxiosRequestConfig<unknown> => {
    // const token = get token from cookie
    // if (token) (config.headers as AxiosHeaders).set("Authorization", `Token ${token}`);
    return config;
};
export default setAxiosHeader;