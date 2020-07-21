<template>
  <div>
    <div class="login-input-container">
      <div
        type="primary"
        style="font-size: 30px;font-weight: bold;text-align: center;margin-bottom: 40px;"
      >数据梦工场</div>
      <div class="login-input">
        <el-input
          placeholder="请输入用户名"
          v-model="name"
        >
        </el-input>
      </div>
      <div class="login-input">
        <el-input
          :type="passwordType"
          placeholder="请输入密码"
          v-model="password"
        >
          <i
            @click="showPassword"
            style="font-size:20px;"
            slot="suffix"
            v-bind:class="[passwordType==='text'?'eye-color':'','el-input__icon el-icon-view']"
          ></i>
        </el-input>
      </div>
      <div class="login-error">
        {{errorText}}
      </div>
      <div class="login-select">
        <el-checkbox v-model="checked">7天内免登录</el-checkbox>
      </div>
      <el-button
        class="login-button"
        @click="login"
        type="primary"
      >登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      name: "hkx",
      password: "111",
      checked: false,
      errorText: "",
      passwordType: "password"
    };
  },
  methods: {
    login() {
      if (!this.name) {
        this.errorText = "用户名不能为空！";
        return;
      } else if (!this.password) {
        this.errorText = "密码不能为空！";
        return;
      }
      let $this = this;
      let data = {};
      data.loginName = this.name;
      data.password = this.password;
      data.iden = this.checked ? 1 : 0;
      sessionStorage.clear()
      this.$router.push("/projectMange/projectInfo")
    },
    showPassword() {
      this.passwordType = this.passwordType === "text" ? "password" : "text";
    }
  }
};
</script>

<style lang="scss" scoped>
.login-input-container {
  height: 100vh;
  text-align: center;
  padding-top: 150px;
}
.login-input {
  text-align: center;
  padding: 10px 0;
  width: 350px;
  margin: 0 auto;
}
.login-button,
.login-error,
.login-select {
  width: 350px;
}
.login-error {
  color: #f56c6c;
  text-align: left;
  margin: 0 auto;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  position: relative;
}
.login-select {
  text-align: right;
  margin: 5px auto;
}
.eye-color {
  color: #409eff;
}
</style>