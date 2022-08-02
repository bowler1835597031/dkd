import { login } from "@/api/user";
export default {
  namespaced: true,
  state: {
    token: "",
    data: {},
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload.token;
      state.data = payload;
    },
  },
  actions: {
    async getToken(context, payload) {
      const res = await login(payload);
      console.log(res);
      context.commit("setToken", res);
    },
  },
};
