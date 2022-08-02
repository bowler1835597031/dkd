// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from "axios";
import { Message } from "element-ui";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 设置axios请求的基础的基础地址
  timeout: 5000, // 定义5秒超时
}); // 创建一个axios的实例
service.interceptors.request.use(); // 请求拦截器
service.interceptors.response.use(
  (res) => {
    if (!res.request.responseURL && res.data.token !== null) {
      const { success, data, message } = res.data;
      if (success) {
        return data;
      }
      Message.error(message);
      return Promise.reject(new Error(message));
    }
    return res;
  },
  function (error) {
    Message.error(message);
    return Promise.reject(error);
  }
); // 响应拦截器
export default service; // 导出axios实例
