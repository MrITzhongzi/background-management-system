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
    /*width: 15%;*/
    /*position: absolute;*/
  }

  .home .content {
    flex-grow: 1;
    padding: 40px;
  }

  .home .content .el-table__header-wrapper th {
    text-align: center;
  }
  /*动画 进入的过渡效果*/

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
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
