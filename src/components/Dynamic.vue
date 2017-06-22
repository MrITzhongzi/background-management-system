<template>
  <div class="dynamic">
    <h4>动态路由</h4>
    <div>
      <p>树形结构</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped="">
  .dynamic {

  }
  .dynamic h4 {
    font-size: 18px;
  }
  .dynamic div:nth-child(2) {
    margin-top: 20px;
    text-align: left;
  }
</style>

<script>

</script>
