<template>
  <div id="main-warp">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#main-warp {
  position: fixed;
  padding: 20px;
  left: 250px;
  top: 60px;
  border: 20px solid #f7f8f9;
  bottom: 0;
  right: 0;
}
</style>