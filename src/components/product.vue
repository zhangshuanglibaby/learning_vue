<template>
  <div class="product">
    <h1>这是产品页</h1>
    <p class='info'>{{info}}</p>
     <button @click="jump">点击显示产品详情</button>
     <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: '~~'
    }
  },

  methods: {
    jump () {
      // console.log(this.$route)
      let id = this.$route.params.id
      if (id === '1') {
        // 使用path要把路径补全
        this.$router.push({ path: `/product/${id}/computer`, query: { id: 'computer' } })
      } else if (id === '2') {
        this.$router.push({ name: 'mobile', params: { id: 'mobile' } })
      } else if (id === '3') {
        this.$router.push({ name: 'mp3' })
      }
    }
  },

  // 通过watch来监听路由参数的变化
  watch: {
    $route (to, from) {
      // console.log('------------------')
      // console.log(to)
      // console.log(from)
      let id = to.params.id // 此时的id是字符串
      if (id === '1') {
        this.info = '这是电脑相关的产品展示'
      } else if (id === '2') {
        this.info = '这是手机相关的产品展示'
      } else if (id === '3') {
        this.info = '这是mp3相关的产品展示'
      }
    }
  },

  // 使用mounted钩子函数,页面一加载就会触发这里的操作
  // 此时的mounted只能监听路由的变化,才能触发这里
  mounted () {
    // console.log(this.$route)
    // 获取参数
    let id = this.$route.params.id // 此时的id是字符串
    if (id === '1') {
      this.info = '这是电脑相关的产品展示'
    } else if (id === '2') {
      this.info = '这是手机相关的产品展示'
    } else if (id === '3') {
      this.info = '这是mp3相关的产品展示'
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  color: blueviolet;
}
// .info {
//   font-size: 40px;
//   color: chartreuse;
//   background-color: coral
// }
</style>
