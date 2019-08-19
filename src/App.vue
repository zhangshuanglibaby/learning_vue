<template>
  <div id="app">
    <!-- <p>这是根组件</p> -->
    <!-- <router-link to="/index">首页</router-link><br>
    <router-link to="/product/1">电脑</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/product/2">手机</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/product/3">mp3</router-link> -->
    <!-- 路由导航 -->
    <router-link to="/market">首页</router-link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/marketProduct/1">零食</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/marketProduct/2">饮料</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/marketProduct/3">水果</router-link>&nbsp;&nbsp;&nbsp;
    <!-- 添加路由展示区域 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="less">

</style>
