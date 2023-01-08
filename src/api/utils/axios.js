import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 50000
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return Promise.resolve(response.data);
        }
    },
    (error) => {
        return Promise.reject(error.data);
    }
);

export default instance;
