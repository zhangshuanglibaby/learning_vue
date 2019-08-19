<template>
    <div class="marketProduct">
        <h1>欢迎来到市场,请任意选购</h1>
        <h2>{{info}}</h2>
        <button @click="jump">点击了解详情商品</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {
      info: ''
    }
  },

  methods: {
    jump () {
      // console.log(this.$router)
      let id = this.$route.params.id
      if (id === '1') {
        this.$router.push({ name: 'snacks' })
      } else if (id === '2') {
        this.$router.push({ name: 'drink' })
      } else if (id === '3') {
        this.$router.push({ name: 'fruit' })
      }
    }
  },

  // 使用watch来监听同一个路由的不同参数,显示不同的内容
  watch: {
    '$route' (to, from) {
      // console.log('---------')
      // console.log(to)
      // console.log(from)
      let id = to.params.id
      if (id === '1') {
        this.info = '多种爆款小零食'
      } else if (id === '2') {
        this.info = '巨好喝饮料'
      } else if (id === '3') {
        this.info = '今日特价水果'
      }
    }
  },

  // 需要一加载这个组件时,获取参数
  // 使用mounted钩子函数,一加载完组件就会触发
  // 注意,此时的mounted是路由变化了才触发的,是监听路由变化的,不能监听同一个路由的不同参数
  mounted () {
    // console.log(this.$route)
    let id = this.$route.params.id // 此时的id是字符串
    // 检测id呈现不同的内容
    if (id === '1') {
      this.info = '多种爆款小零食'
    } else if (id === '2') {
      this.info = '巨好喝饮料'
    } else if (id === '3') {
      this.info = '今日特价水果'
    }
  }
}
</script>

<style lang="less" scoped>
  h2 {
    color: firebrick
  }
</style>
