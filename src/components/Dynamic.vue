<template>
  <div class="dynamic">
    <h4>动态路由</h4>
    <div>
      <p>树形结构</p>

      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
      >
        <router-view></router-view>
      </transition>
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

  import Velocity from 'velocity-animate'

  export default {
    data: function () {
      return {
        show: false
      }
    },
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.transformOrigin = 'left'
      },
      enter: function (el, done) {
        Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 300})
        Velocity(el, {fontSize: '1em'}, {complete: done})
      },
      leave: function (el, done) {
        Velocity(el, {translateX: '15px', rotateZ: '50deg'}, {duration: 600})
        Velocity(el, {rotateZ: '100deg'}, {loop: 2})
        Velocity(el, {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
        }, {complete: done})
      }
    }
  }

</script>
