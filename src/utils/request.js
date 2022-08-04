// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";
import { getTokenTime } from "@/utils/auth";
import router from "@/router";

function isTimeOut() {
  const currentTime = Date.now();
  const timeout = 2 * 60 * 60 * 1000;
  const tokenTime = getTokenTime();
  return currentTime - tokenTime > timeout;
}

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 设置axios请求的基础的基础地址
  timeout: 5000, // 定义5秒超时
}); // 创建一个axios的实例

// service.interceptors.request.use(async (config) => {
//   // console.log(config);
//   if (store.state.user.token) {
//     if (isTimeOut()) {
//       await store.dispatch("user/logout");
//       router.push("/login");
//       return Promise.reject(new Error("登录过期"));
//       // console.log("跳转到登录页");
//     } else {
//       config.headers.Authorization = store.state.user.token;
//     }
//   }
//   return config;
// }); // 请求拦截器

service.interceptors.request.use(async (config) => {
  // console.log(config);
  if (store.state.user.token) {
    if (isTimeOut()) {
      await store.dispatch("user/logout");
      router.push("/login");
      return Promise.reject(new Error("登录过期"));
      // console.log("跳转到登录页");
    } else {
      config.headers.Authorization = store.state.user.token;
    }
  }
  return config;
}); // 请求拦截器

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
