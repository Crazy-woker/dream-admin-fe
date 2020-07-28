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
import { getSms } from "@/api/login";
import { reactive, ref, isRef, toRefs, onMounted } from "@vue/composition-api";
export default {
  setup(props, context) {
    const arr = reactive(["1", "2", "3"]); //声明对象类型
    const name = ref("hkx"); //声明基础类型
    const password = ref("111");
    const checked = ref(false);
    const errorText = ref("");
    const passwordType = ref("password");
    // 生命周期
    onMounted(() => {
      getSms();
    });
    //声明函数
    const login = () => {
      // if (!name.value) {
      //   errorText.value = "用户名不能为空！";
      //   return;
      // } else if (!password.value) {
      //   errorText.value = "密码不能为空！";
      //   return;
      // }
      // let data = {};
      // data.loginName = name.value;
      // data.password = password.value;
      // data.iden = checked.value ? 1 : 0;
      // sessionStorage.clear();
      context.root.$store.dispatch("app/login",{userName:"hkx",token:"1121do01ked10ed190"})
      context.root.$router.push({
        name: "console"
      });
    };
    const showPassword = () => {
      passwordType.value = passwordType.value === "text" ? "password" : "text";
    };

    return {
      name,
      password,
      checked,
      errorText,
      passwordType,
      login,
      showPassword
    };
  },
  name: "login",
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