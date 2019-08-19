<template>
  <div id="app">
    <p>这是根组件</p>
    <router-link to="/index">首页</router-link><br>
    <router-link to="/product">产品</router-link>
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
