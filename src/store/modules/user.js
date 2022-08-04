import { login, getUserInfoApi } from "@/api/user";
import { setTokenTime } from "@/utils/auth";
export default {
  namespaced: true,
  state: {
    loginInfo: {},
    token: "",
    userInfo: {},
  },
  mutations: {
    setToken(state, payload) {
      state.loginInfo = payload;
      state.token = payload.token;
    },
    setUserInfo(state, payload) {
      state.userInfo = payload.userInfo;
    },
  },
  actions: {
    async getToken(context, payload) {
      const res = await login(payload);
      // console.log(res);
      context.commit("setToken", res);
      setTokenTime();
    },
    async getUserInfo(context, payload) {
      const res = await getUserInfoApi(payload);
      context.commit("setUserInfo", res);
    },
    logout(context) {
      context.commit("setToken", "");
      context.commit("setUserInfo", {});
    },
  },
};
