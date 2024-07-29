
import axios from "axios";
import Cookies from "js-cookie";

const request = axios.create({
  withCredentials: true
});

console.log('create axios');

const checkIsServer = () => typeof window == 'undefined';

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    if (!checkIsServer()) {
      config.headers['Authorization'] = Cookies.get("token") || '';
    }

    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.success) {
      return response.data;
    }

    return Promise.reject(response.data);
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error.message);
  }
);

export default request;

