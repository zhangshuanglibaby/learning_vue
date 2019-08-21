<template>
  <div class="father">
    <p>这是父组件,{{fatherName}},我的儿子他叫{{sonName}}</p>
    <!-- 使用子组件 -->
    <son :sName='sonName'></son>
  </div>
</template>
<script>
// 引入要使用的子组件
import son from '@/components/son-父传子.vue'
export default {
  // 注册子组件
  components: {
    son
  },
  data () {
    return {
      fatherName: '我是爸爸',
      sonName: 'little jack'
    }
  }
}
</script>
<style lang="less" scoped>
.father {
  background-color: yellow;
}
</style>
