// 登陆权限控制
import router from "@/router";
import store from "@/store";
//全局路由前置守卫
const whiteList = ["/login", "/404"];
router.beforeEach((to, from, next) => {
  const token = store.state.user.token;
  console.log(store.state.user);
  if (token) {
    if (!store.state.user.userInfo.userId) {
      store.dispatch("user/getUserInfo",store.state.user.userInfo.userId);
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
