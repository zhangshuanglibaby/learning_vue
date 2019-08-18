<template>
  <div>
    <button @click="delCateById">get要带参数</button>
    <button @click="getAllCate">get无参数获取所有目录</button>
    <br>
    <hr>
    slug : <input type="text" v-model="cateObj.slug"><br>
   name : <input type="text" v-model="cateObj.name"> <button @click='addCate'>post请求添加</button>
  </div>
</template>

<script>
import { delCateById, getAllCate, addCate } from '@/utils/myaxios.js'
export default {
  data () {
    return {
      cateObj: {
        slug: '',
        name: ''
      }
    }
  },
  methods: {
    delCateById () {
      delCateById({ id: 27 })
        .then(err => {
          console.log(err)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllCate () {
      getAllCate()
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCate () {
      addCate(this.cateObj)
        .then(res => {
          console.log(res)
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
