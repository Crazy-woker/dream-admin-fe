<template>
  <div id="header-wrap">
    <div class="entry-title">数据梦工厂</div>
    <el-menu
      :default-active="topActiveName"
      class="el-menu-demo header-menu"
      mode="horizontal"
      @select="selectTopMenu"
      background-color="#344a5f"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- <div>数据梦工厂</div> -->
      <el-menu-item
        v-for="(item,index) in topNav"
        :key="index"
        :index="item.leftNavName"
      >{{item.name}}
      </el-menu-item>
    </el-menu>
    <div class="user-title">
      <el-dropdown @command="selectDropdown">
        <span class="el-dropdown-link">
          <span style="color:#fff;font-size: 16px;">管理员</span>
          <!-- <img style="width:40px;height:40px;border-radius: 20px;vertical-align: middle;margin-left: 10px;" :src="profileUrl" alt=""> -->
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command='退出登录'>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { getNav } from "@/utils/nav.js";
export default {
  data() {
    return {
      topNav: [],
      activeIndex: "1",
      //显示顶部栏的高亮状态
      topActiveName: "",
      leftNav: "",
      //显示侧边栏的高亮状态
      slideActiveName: "",
      isCollapse: false,
      isSideShow: [],
      //展开导航栏的数组
      openeds: [],
      isLogin: false,
      isLeftShow: true
    };
  },
  created() {},
  mounted() {
    this.getActiveName();
  },
  methods: {
    //获取顶部导航栏信息
    getActiveName() {
      let nav = getNav();
      let leftItemName = sessionStorage.getItem("leftItemName");
      let leftNavName = sessionStorage.getItem("leftNavName")
        ? sessionStorage.getItem("leftNavName")
        : null;
      this.topNav = nav.topNav;
      if (leftNavName) {
        this.topActiveName = leftNavName;
      } else {
        this.topActiveName = nav.topNav[0].leftNavName;
        console.log(nav.leftNav[this.topActiveName], this.topActiveName);
        sessionStorage.setItem("leftNavName", this.topActiveName);
        sessionStorage.setItem("leftName", JSON.stringify(["项目配置"]));
        sessionStorage.setItem(
          "leftItemName",
          nav.leftNav[this.topActiveName][0].menuItems[0].name
        );
      }
    },
    //选择顶部导航栏
    selectTopMenu(val) {
      let nav = getNav();
      sessionStorage.setItem("leftNavName", val);
      this.leftNav = nav.leftNav[val];
      sessionStorage.setItem(
        "leftName",
        JSON.stringify([`${this.leftNav[0].name}`])
      );
      sessionStorage.setItem("leftItemName", this.leftNav[0].menuItems[0].name);

      this.$emit("leftdata", {
        leftNav: this.leftNav,
        leftName: [`${this.leftNav[0].name}`],
        slideName: this.leftNav[0].menuItems[0].name
      });
      this.$router.push(`${this.leftNav[0].menuItems[0].path}`);
    },
    selectDropdown() {}
  }
};
</script>

<style lang="scss" scoped>
#header-wrap {
  width: 100vw;
  height: 60px;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #344a5f;
  .el-menu-demo {
    height: 100%;
  }
  .entry-title {
    width: 200px;
    text-align: center;
    line-height: 60px;
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    font-size: 20px;
  }
  .header-menu {
    margin-left: 200px;
  }
  .user-title {
    position: absolute;
    top: 0;
    right: 100px;
    z-index: 1000;
    height: 60px;
    line-height: 60px;
    color: #fff;
    cursor: pointer;
  }
}
</style>