// 登陆权限控制
import router from "@/router";
import store from "@/store";
//全局路由前置守卫
const whiteList = ["/login", "/404"];
router.beforeEach(async (to, from, next) => {
  const token = store.state.user.token;
  if (token) {
    if (!store.state.user.userInfo.userId) {
      // console.log(store.state.user.userInfo.userId);
      await store.dispatch("user/getUserInfo", store.state.user.userId);
    }
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    const isCludes = whiteList.includes(to.path);
    if (isCludes) {
      next();
    } else {
      next("/login");
    }
  }
});
