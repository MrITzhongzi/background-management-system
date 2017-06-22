<template>
  <div>
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in imgUrl" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
          <!--<img :src="imgUrl[item]" alt="">-->
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>

  const url = location.href.split('#')[0] + '#/home/'
  export default {
      data (){
          return {
              imgUrl : [
                  '../../static/imgs/1-01.png',
                  '../../static/imgs/1-02.png',
                  '../../static/imgs/1-03.png',
                  '../../static/imgs/1-04.png'
              ],
          }
      }
  }

</script>
