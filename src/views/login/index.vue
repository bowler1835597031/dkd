<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <!-- logo -->
      <div class="title-container">
        <img class="login-logo" src="../../assets/img/logo.png" />
      </div>
      <!-- 表单区域 -->
      <el-form-item prop="loginName">
        <span class="svg-container">
          <i class="el-icon-mobile-phone" />
        </span>
        <el-input
          v-model="loginForm.loginName"
          placeholder="请输入账号"
          type="text"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-lock" />
        </span>
        <el-input
          :key="passwordType"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>

      <el-form-item prop="code">
        <span class="svg-container">
          <i class="el-icon-chat-line-square" />
        </span>
        <el-input
          v-model="loginForm.code"
          type="text"
          placeholder="请输入验证码"
        />
        <div class="yzm" @click="changeImage">
          <img :src="img" />
        </div>
      </el-form-item>

      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="login"
        :loading="isLogin"
      >
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
import { getCode } from "@/api/user";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        loginName: "admin",
        password: "admin",
        code: "",
        clientToken: "",
        loginType: 0,
      },
      loginRules: {
        loginName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
      passwordType: "password",
      img: "",
      isLogin: false,
    };
  },
  created() {
    this.changeImage();
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    async login() {
      this.isLogin = true;
      try {
        await this.$refs.loginForm.validate();
        await this.$store.dispatch("user/getToken", this.loginForm);
        this.$router.push("/");
        this.$message.success("登录成功");
      } finally {
        this.isLogin = false;
      }
    },
    async changeImage() {
      try {
        this.loginForm.clientToken = Math.floor(Math.random() * 10000);
        const res = await getCode(this.loginForm.clientToken);
        // console.log(res);
        this.img = res.request.responseURL;
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  background: url("../../assets/img/background.png") no-repeat;
  background-size: cover;

  .login-form {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 0px 35px 0;
    background: #fff;
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;

    ::v-deep .el-form-item {
      width: 100%;
      height: 52px;
      margin-bottom: 24px;
      background: #fff;
      border: 1px solid #e2e2e2;
      .el-input input {
        color: #999 !important;
      }
      .el-form-item__content {
        display: flex;
      }
    }
  }
  .el-button--primary {
    width: 100%;
    height: 52px;
    background: linear-gradient(262deg, #2e50e1, #6878f0);
    opacity: 0.91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
    border-color: unset;
  }
  ::v-deep .elcol {
    width: 30px;
    height: 30px;
    background-color: #999;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: absolute;
    width: 96px;
    height: 96px;
    position: relative;
    top: -46px;
    left: 50%;
    margin-left: -48px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
