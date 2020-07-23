<template>
  <div id="layout">
    <menuHeader @leftdata="leftdata"></menuHeader>
    <menuMain></menuMain>
    <menuNav
      :leftDataNav="leftNav"
      :leftDataName="leftName"
      :slideName="slideName"
    ></menuNav>
  </div>
</template>

<script>
import menuHeader from "./components/header";
import menuNav from "./components/nav";
import menuMain from "./components/main";

export default {
  components: {
    menuHeader,
    menuNav,
    menuMain
  },
  name: "layout",
  data() {
    return {
      leftNav: [],
      leftName: "",
      slideName: ""
    };
  },
  methods: {
    leftdata(val) {
      this.leftNav = val.leftNav;
      this.leftName = val.leftName;
      this.slideName = val.slideName;
    }
  }
};
</script>

<style lang="scss" scoped>
#layout {
  background-color: #f7f8f9;
}
</style>