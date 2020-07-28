<template>
  <div id="header-wrap">
    <div class="entry-title">数据梦工厂</div>
    <el-menu
      :default-active="activeMenu"
      class="el-menu-demo header-menu"
      mode="horizontal"
      @select="selectTopMenu"
      background-color="#344a5f"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <template v-for="(item,index) in routes">
        <el-menu-item
          :key="index"
          :index="item.meta.activeMenu"
          v-if="!item.hidden"
        >{{item.meta.name}}
        </el-menu-item>
      </template>

    </el-menu>
    <div class="user-title">
      <el-dropdown @command="selectDropdown">
        <span class="el-dropdown-link">
          <span style="color:#fff;font-size: 16px;">管理员</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            command='退出登录'
            @click="exit"
          >退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //显示顶部栏的高亮状态
      isLogin: false,
      isLeftShow: true,
      routes: [],
    };
  },
  computed: {
    // 我们使用计算属性来获取到当前点击的菜单的路由路径，然后设置default-active中的值
    // 使得菜单在载入时就能对应高亮
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // 可以在路由配置文件中设置自定义的路由路径到meta.activeMenu属性中，来控制菜单自定义高亮显示
      if (meta.activeMenu) {
        // 注意这里很重要
        return meta.activeMenu;
      }
      return path;
    },
  },
  mounted() {
    this.routes = this.$router.options.routes;
  },
  methods: {
    //选择顶部导航栏
    selectTopMenu(val) {
      let routerName = val.split("/")[1];
      sessionStorage.setItem("routerName", routerName);
      this.$emit("changeName", routerName);
    },
    selectDropdown() {},
    //退出登录
    exit() {
      this.$store.dispatch("app/exit");
    },
  },
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