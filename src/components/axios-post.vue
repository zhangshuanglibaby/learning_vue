<template>
  <div class="post">
    <button @click='addCate'>post请求</button>
    <button @click='editCate'>post请求2</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      cateObj: {
        slug: 'read',
        name: '百科全书'
      },
      editCateById: {
        id: 8,
        slug: 'story',
        name: '恐怖故事'
      }
    }
  },
  methods: {
    addCate () {
      axios.post('http://localhost:8000/addCate', this.cateObj)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editCate () {
      axios.post('http://localhost:8000/editCateById', this.editCateById)
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
