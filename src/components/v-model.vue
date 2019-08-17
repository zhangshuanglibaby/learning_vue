<template>
  <!-- v-model 实现数据的双向绑定 -->
  <!-- 作用是登录的时候可以收集用户的数据 -->
  <!-- 编辑的时候可以取数据 -->
  <div class="box">
    <!-- v-model 限制于input textarea select -->
    <p>登录</p>用户名 :
    <input type="text" v-model="loginForm.userName" />
    <br />密码 :
    <input type="text" v-model="loginForm.userPass" />
    <br />
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        userName: '',
        userPass: ''
      }
    }
  },
  methods: {
    login () {
      console.log(this.loginForm)
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  font-size: 20px;
  color: brown;
}
</style>
