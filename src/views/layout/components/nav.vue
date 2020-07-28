<template>
  <div id="nav-wrap">
    <el-col :class="{isShow:!isLeftShow}">
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="selectLeftMenu"
        :default-openeds="openeds"
        :unique-opened="true"
        router
      >
        <template v-for="(item,index) in routes">
          <div
            :key="index"
            v-if="!item.hidden"
          >
            <template>
              <div
                v-for="(child, childIndex) in item.children"
                :key="childIndex"
              >
                <el-submenu
                  :index="child.path"
                  v-if="!child.singleType"
                >
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{child.meta.name}}</span>
                  </template>
                  <el-menu-item-group>
                    <template v-for="(childItem,childItemIndex) in child.children">
                      <el-menu-item
                        v-if="!child.isSilderShow"
                        :key="childItemIndex"
                        :index="childItem.meta.apiActiveMenu"
                      >
                        {{childItem.meta.name}}
                      </el-menu-item>
                    </template>
                  </el-menu-item-group>
                </el-submenu>
              </div>
            </template>

            <template>
              <div
                v-for="(child) in item.children"
                :key="child.name"
              >
                <el-menu-item
                  :index="child.meta.apiActiveMenu"
                  v-if="child.singleType && child.isSilderShow"
                >
                  <i class="el-icon-menu"></i>
                  <span slot="title">{{child.meta.name}}</span>
                </el-menu-item>
              </div>
            </template>

          </div>
        </template>

      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  props: ["menuName"],
  data() {
    return {
      topActiveName: "",
      //显示侧边栏的高亮状态
      slideActiveName: "",
      openeds: ["/projectConfig"],
      isLeftShow: true,
      routes: [],
    };
  },
  mounted() {
    // 页面手动刷新指定路由
    this.getLeftMenu();
  },
  computed: {
    // 我们使用计算属性来获取到当前点击的菜单的路由路径，然后设置default-active中的值
    // 使得菜单在载入时就能对应高亮
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      // 可以在路由配置文件中设置自定义的路由路径到meta.activeMenu属性中，来控制菜单自定义高亮显示
      if (meta.apiActiveMenu) {
        // 注意这里很重要
        return meta.apiActiveMenu;
      }
      return path;
    },
  },
  watch: {
    menuName(newVal, oldVal) {
      this.getLeftMenu();
    },
  },
  methods: {
    //获取侧边栏
    getLeftMenu() {
      let routes = this.$router.options.routes;
      let routerInfo = [];
      let routerName = sessionStorage.getItem("routerName") || "projectMange";
      //过滤出所有可以显示的路由
      routerInfo = routes.filter((item) => {
        return item.hidden == false && item.name == routerName;
      });
      this.routes = routerInfo;
    },
    //选择侧边栏
    selectLeftMenu(key, keyPath) {},
    //控制菜单显示隐藏
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
  },
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