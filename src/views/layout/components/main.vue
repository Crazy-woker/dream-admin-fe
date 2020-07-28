<template>
  <div id="main-warp">
    <div class="main-content">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#main-warp {
  height: 100vh;
  position: fixed;
  padding: 20px;
  left: 250px;
  top: 60px;
  border: 20px solid #f7f8f9;
  bottom: 0;
  right: 0;
}
.main-content {
  width: 100%;
  height: 100%;
  // padding-top: 30px;
  // padding-left: 30px;
  .content {
    width: 100%;
    height: 100%;
    // padding-top: 30px;
    // padding-left: 30px;
    background-color: #fff;
  }
}
</style>