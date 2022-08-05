import { login, getUserInfoApi } from "@/api/user";
// import { setTokenTime } from "@/utils/auth";
export default {
  namespaced: true,
  state: {
    userId: "",
    token: "",
    userInfo: {},
  },
  mutations: {
    setToken(state, payload) {
      console.log(payload);
      state.userId = payload.userId;
      state.token = payload.token;
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    async getToken(context, payload) {
      const res = await login(payload);
      // console.log(res);
      context.commit("setToken", res.data);
      // setTokenTime();
    },
    async getUserInfo(context, payload) {
      // console.log(payload);
      const res = await getUserInfoApi(payload);
      // console.log(res);
      context.commit("setUserInfo", res);
    },
    logout(context) {
      context.commit("setToken", "");
      context.commit("setUserInfo", {});
    },
  },
};
