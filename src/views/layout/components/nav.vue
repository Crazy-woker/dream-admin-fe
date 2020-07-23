<template>
  <div id="nav-wrap">
    <el-col :class="{isShow:!isLeftShow}">
      <el-menu
        :default-active="slideActiveName"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="selectLeftMenu"
        :default-openeds="openeds"
        :unique-opened="true"
      >

        <div
          v-for="(item,index) in leftNav"
          :key="index"
        >
          <el-submenu
            :index="item.name"
            v-if="item.type"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(child,childI) in item.menuItems"
                :key="childI"
                :index="child.name"
              >
                {{child.name}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item
            :index="item.name"
            v-if="!item.type"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </div>

      </el-menu>
    </el-col>
  </div>
</template>

<script>
import Vue from "vue";
import { getNav } from "@/utils/nav.js";
export default {
  props: ["leftDataNav", "leftDataName", "slideName"],
  data() {
    return {
      topNav: [],
      //显示顶部栏的高亮状态
      topActiveName: "",
      //显示侧边栏的高亮状态
      slideActiveName: "",
      leftNav: [],
      isCollapse: false,
      isSideShow: [],
      //展开导航栏的数组
      openeds: [],
      isLogin: false,
      isLeftShow: true,
    };
  },
  mounted() {
    this.getLeftMenu();
  },

  watch: {
    slideName(newVal, oldVal) {
        this.slideActiveName = newVal
    },
    leftDataName: {
      //深度监听，可监听到对象、数组的变化
      handler(newVal, oldVal) {
        this.openeds = newVal;
      },
      deep: true //true 深度监听
    },
    leftDataNav: {
      //深度监听，可监听到对象、数组的变化
      handler(newVal, oldVal) {
        this.leftNav = newVal;
      },
      deep: true //true 深度监听
    }
  },
  methods: {
    //获取侧边栏信息
    getLeftMenu() {
      let nav = getNav();
      let leftName = sessionStorage.getItem("leftName");
      let leftItemName = sessionStorage.getItem("leftItemName");
      let leftNavName = sessionStorage.getItem("leftNavName")
        ? sessionStorage.getItem("leftNavName")
        : null;
      console.log(nav);
      if (leftNavName) {
        this.openeds = JSON.parse(leftName);
        this.slideActiveName = leftItemName;
        this.leftNav = nav.leftNav[leftNavName];
      } else {
        this.leftNav = nav.leftNav.projectMange;
        this.openeds = [`${this.leftNav[0].name}`];
      }
    },
    //选择侧边栏
    selectLeftMenu(key, keyPath) {
      sessionStorage.setItem("leftItemName", key);
      sessionStorage.setItem("leftName", JSON.stringify(this.isSideShow));
      let thisMenu = this.leftNav.filter(item => {
        return item.name === keyPath[0];
      });
      let selectObj = thisMenu[0].menuItems.filter(item => {
        return item.name == key;
      });
      if (selectObj.length == 0) {
        thisMenu[0].menuItems.forEach(element => {
          if (element.menuItems) {
            element.menuItems.forEach(element => {
              if (element.name == key) {
                selectObj.push(element);
              }
            });
          }
        });
      }
        this.$router.push(selectObj[0].path);
    },
    //控制菜单显示隐藏
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      this.isSideShow = keyPath;
    },
    handleClose(key, keyPath) {
      this.isSideShow = keyPath;
    }
  }
};
</script>

<style lang="scss" scoped>
#nav-wrap {
  width: 250px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 60px;
  background-color: #fff;
}
</style>