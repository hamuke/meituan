<template>
  <div class="page-login">
    <header class="login-header">
      <router-link class="logo" to="/index"></router-link>
    </header>
    <section class="login-main">
      <div class="banner">
        <img
          src="//p0.meituan.net/passport/fd6a1c8f22b4ac0464998aa54e3e548136705.jpg"
        />
      </div>
      <div class="form">
        <h4 v-if="errorMsg" class="tips">
          <i class="el-icon-warning"></i>{{ errorMsg }}
        </h4>
        <p>账号登录</p>
        <div class="el-input">
          <el-input
            :class="{ error: errorMsg && !userName }"
            placeholder="用户名"
            v-model="userName"
          >
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </div>
        <div class="el-input">
          <el-input
            :class="{ error: errorMsg && !password }"
            type="password"
            placeholder="密码"
            v-model="password"
          >
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </div>
        <div class="forgetPwd">
          <a href="#">忘记密码</a>
        </div>
        <div class="btn-wrapper">
          <button class="btn-login" @click="submit">登录</button>
        </div>
        <p class="reg">
          <span>还没有账号？</span>
          <router-link to="/register">立即注册</router-link>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth">
            <a href="#" class="oauth__link oauth__link--qq"></a
            ><a href="#" class="oauth__link oauth__link--weibo"></a>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="footer-content">
        <a class="link" rel="nofollow" href="https://about.meituan.com/home"
          >关于美团</a
        ><span>|</span
        ><a class="link" rel="nofollow" href="https://zhaopin.meituan.com/"
          >加入我们</a
        ><span>|</span
        ><a
          class="link"
          rel="nofollow"
          href="https://ecom.meituan.com/bizsettle/settle/merchantsSettle"
          >商家入驻</a
        ><span>|</span
        ><a class="link" rel="nofollow" href="https://www.meituan.com/help/faq"
          >帮助中心</a
        ><span>|</span
        ><a
          class="link"
          rel="nofollow"
          href="http://i.meituan.com/mobile/down/meituan"
          >美团手机版</a
        >
      </div>
      <div class="copyright">
        <span>©2022</span
        ><a class="link" href="https://www.meituan.com">美团版权所有</a
        ><a class="link" href="http://www.miibeian.gov.cn/">京ICP证070791号</a
        ><span>京公网安备11010502025545号</span>
      </div>
    </footer>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      userName: "",
      password: "",
      errorMsg: "",
    };
  },
  methods: {
    submit() {
      if (!this.userName) {
        this.errorMsg = "请输入用户名";
        return false;
      }
      if (!this.password) {
        this.errorMsg = "请输入密码";
        return false;
      }
      api
        .getLogin({
          params: { userName: this.userName, password: this.password },
        })
        .then((res) => {
          console.log(res);
          if (res.data.status == "success") {
            this.$router.push({ name: "index" });
            this.$store.commit("setUserName", this.userName);
          } else {
            this.errorMsg = res.data.msg;
          }
        });
    },
  },
};
</script>

<style lang="scss">
@import "../assets/css/login/index.scss";
</style>