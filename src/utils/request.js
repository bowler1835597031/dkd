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
    console.log(res);
    if (res.config.url.includes("/likede/api/user-service/user/imageCode/")) {
      return res;
    }
    const { success, msg } = res.data;
    if (success) {
      return res.data;
    }
    Message.error(msg);
    return Promise.reject(new Error(msg));
  },
  function (error) {
    Message.error("登录异常");
    return Promise.reject(error);
  }
); // 响应拦截器
export default service; // 导出axios实例
