<template>
  <div class="get">
    <button @click="getAllCate">get无参数获取所有目录</button>
    <button @click="getAllMenu">get无参数获取所有菜单</button><br>
    <button @click="delCateById">get要带参数</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    getAllCate () {
      axios.get('http://localhost:8000/getAllCate')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllMenu () {
      axios.get('http://localhost:8000/getAllMenu')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // delCateById () {
    //   axios.get('http://localhost:8000/delCateById?id=25')
    //     .then(err => {
    //       console.log(err)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
    delCateById () {
      axios.get('http://localhost:8000/delCateById', { params: { id: 26 } })
        .then(err => {
          console.log(err)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
