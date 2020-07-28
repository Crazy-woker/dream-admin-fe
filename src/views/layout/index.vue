<template>
  <div id="layout">
    <menuHeader @changeName="changeName"></menuHeader>
    <menuMain></menuMain>
    <menuNav :menuName="menuName"></menuNav>
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
    menuMain,
  },
  name: "layout",
  data() {
    return {
      menuName:""
    };
  },
  methods: {
    changeName(val) {
      this.menuName = val
    },
  },
};
</script>

<style lang="scss" scoped>
#layout {
  background-color: #f7f8f9;
}
</style>