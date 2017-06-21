<template>
  <div class="home">
    <sider-bar></sider-bar>
    <div class="content">
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<style>
  .home {
    height: 100%;
    /*position: relative;*/
    display: flex;
  }

  .home .home-default {
    width: 15%;
    /*position: absolute;*/
  }

  .home .content {
    flex-grow: 1;
    padding: 40px;
  }

  .home .content .el-table__header-wrapper th {
    text-align: center;
  }
</style>

<script>
  import siderBar from './siderBar.vue'

  export default {
    data() {
      return {}
    },
    components: {
      siderBar
    }
  }

</script>
