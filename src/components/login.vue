<template>
  <div class="login">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <img src="../assets/drink-logo.png" alt="">
          <h3>幸福小</h3>
        </div>
      </el-col>
    </el-row>
    <!--表单验证-->
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
        <router-link to="home/myCommission">home</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'

  Vue.use(VueAxios, axios)
  export default {
    name: 'login',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.username !== '') {
            this.$refs.ruleForm2.validateField('username');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          username: '',
//          age: ''
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          username: [
            {validator: validatePass2, trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let requestLoginData = {}
            this.axios.get('../../static/login.json').then((response) => {
              requestLoginData = response.data[0]
              if (requestLoginData.username == this.ruleForm2.username && requestLoginData.password == this.ruleForm2.pass) {

                localStorage.setItem('username-lhw', requestLoginData.username)
                localStorage.setItem('password-lhw', requestLoginData.password)

                this.$router.push('/home')
                /* setTimeout(function () {

                 },20000);*/

              } else {
                this.open();
              }
              console.log(response.data)
            }).catch(err => {
              console.log(err);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      open() {
        this.$alert('您输入的用户名或者密码错误', '爱心tip', {
          confirmButtonText: '确定',
        });
      }
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    margin: 100px auto;
    max-width: 600px;
  }

  .login .grid-content {
    position: relative;
    vertical-align: middle;
  }

  .login .grid-content img {
    width: 50px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
  }

  .login .grid-content h3 {
    height: 50px;
    line-height: 50px;
  }

</style>
