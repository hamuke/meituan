<template>
  <div class="page-register">
    <header class="header">
      <div class="wrapper">
        <router-link class="logo" to="/index"></router-link>
        <div class="login">
          <span class="tip">已有美团账号？</span>
          <router-link to="/login">登录</router-link>
        </div>
      </div>
    </header>
    <div class="content">
      <el-form
        :model="registerInfo"
        status-icon
        :rules="rules"
        ref="registerInfo"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName" class="label">
          <el-input type="text" v-model="registerInfo.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" class="label">
          <el-input
            show-password
            v-model="registerInfo.password"
            @input="input"
          ></el-input>
        </el-form-item>
        <div class="pw-strength">
          <div :class="['bar', strengthClass]"></div>
          <div class="letter">
            <span>弱</span>
            <span>中</span>
            <span>强</span>
          </div>
        </div>
        <el-form-item label="确认密码" prop="rePassword" class="label">
          <el-input show-password v-model="registerInfo.rePassword"></el-input>
        </el-form-item>
        <el-form-item>
          <button
            type="submit"
            class="btn sign-login-btn"
            @click="submitForm('registerInfo')"
          >
            完成注册并登录
          </button>
        </el-form-item>
        <div class="user-agreement-wrap">
          <div class="tip" style="visibility: hidden">
            请先阅读并勾选用户协议
          </div>
          <div class="text">
            <label>
              <input type="checkbox" class="checkbox" />
              <i></i>
            </label>
            <div class="user-agreement-content">
              我已阅读并同意<a href="#">《美团用户协议》</a
              ><a href="#">《隐私政策》</a>
              ，并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
            </div>
          </div>
        </div>
      </el-form>
    </div>
    <footer class="footer">
      <p>
        ©<a class="f1" href="https://www.meituan.com">meituan.com</a>&nbsp;
        <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/"
          >京ICP证070791号</a
        >&nbsp;
        <span class="f1">京公网安备11010502025545号</span>
      </p>
    </footer>
  </div>
</template>

<script>
import api from "@/api/index.js";
import regRule from "@/utils/regRule.js";
export default {
  data() {//el自定义规则表单
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerInfo.password !== "") {
          this.$refs.registerInfo.validateField("rePassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerInfo.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerInfo: {
        userName: "",
        password: "",
        rePassword: "",
      },
      strengthClass: "",
      rules: {
        user: [{ validator: validateUser, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          api
            .getRegister({
              params: this.registerInfo,
            })
            .then((res) => {
              if (res.data.status == "success") {
                this.$router.push({ name: "login" });
              } else {
                alert(res.data.msg);
              }
            });
        } else {
          return false;
        }
      });
    },
    input() {//校验密码强度
      var pwd = this.registerInfo.password;
      if (pwd.length >= 6 && pwd.length <= 16) {
        if (
          regRule.regNum.test(pwd) ||
          regRule.regLetter.test(pwd) ||
          regRule.regChar.test(pwd)
        ) {
          this.strengthClass = "weak";
        } else if (
          regRule._regNum.test(pwd) &&
          regRule._regLetter.test(pwd) &&
          regRule._regChar.test(pwd)
        ) {
          this.strengthClass = "strong";
        } else if (!pwd.length) {
          this.strengthClass = "";
        } else {
          this.strengthClass = "normal";
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/css/register/index.scss";
</style>