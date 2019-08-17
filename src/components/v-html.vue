<template>
<!-- v-html  可以解析html结构 -->
<!-- 使用方法类似属性的使用 v-html="变量" -->
  <div class="box">
    <p>这个文件描述v-html,他可以解析html结构</p>
    <p>{{content}}{{msg}}</p>
    <p v-text='content'></p>
    <p v-html='content'>{{msg}}</p>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '<h2>hello jack</h2>',
      content: '<h1>我是可以被解析的</h1>'
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  font-size: 20px;
  color: blueviolet;
}
</style>
