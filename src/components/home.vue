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
  }
</style>

<script>
  import siderBar from './siderBar.vue'

  export default {
    data() {
      return {

      }
    },
    components:{
      siderBar
    }
  }

</script>
