<template>
    <div class="test">
        <button @click="getlist">跨域 ---jsonp</button>

    </div>
</template>

<script>
// 引入vue
import Vue from 'vue'
// 引入vue-resourse
import VueResource from 'vue-resource'
// 使用use
Vue.use(VueResource)
export default {
  methods: {
    getlist () {
      this.$http.jsonp('http://127.0.0.1:3003/getlist').then(res => {
        console.log(res)
      }, err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
