<template>
  <div class="home-default">
    <el-row class="tac">
      <el-col :span="8">
        <h5>幸福小饮料</h5>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="2"><i class="el-icon-menu"></i>
            <router-link to="/home/myCommission">我的佣金</router-link>
          </el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>
            <router-link to="/home/withdraw">我的提现</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<style>

  .home-default {
    width: 15%;
    height: 100%;
  }
  .home-default > div {
    height: 100%;
  }
  .home-default > div > div {
    height: 100%;
    width: 100%;
  }

  .home-default .el-menu {
    height: 100%;
  }
  .home-default .el-col {
    position: relative;
  }
  .home-default .el-col h5 {
    position: absolute;
    z-index: 2 ;
    top: 20px;
    left: 20px;
    text-align: center;
    width: 100%;
    font-size: 16px;
  }

  .home-default .el-col .el-menu {
    padding-top: 40px;
  }

</style>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
