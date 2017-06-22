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
          <el-menu-item index="3"><i class="el-icon-date"></i>
            <router-link to="/home/richText">富文本</router-link>
          </el-menu-item>
          <!--分组选项导航-->
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>
              <router-link to="/home/dynamic">动态路由</router-link>
            </template>
            <el-menu-item-group>
              <template slot="title">
                树形控件
              </template>
              <el-menu-item index="1-1">
                <router-link to="/home/dynamic/dynamicTree">默认的树形控件</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/home/dynamic/dynamicChooseTree">可选择的树形控件</router-link>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <!--走马灯导航-->
          <el-menu-item index="3"><i class="el-icon-date"></i>
            <router-link to="/home/zouMaDeng">轮播图</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<style>

  .home-default {
    width: 200px;
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
