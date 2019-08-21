<template>
  <div class="son">
    <p>这是子组件,我是儿子{{sName}}</p>
  </div>
</template>
<script>
export default {
  // 使用props设置需要接受的参数
  props: ['sName'],
  data () {
    // return {
    //   sonName: 'little jack'
    // }
  }
}
</script>
<style lang="less" scoped>
.son {
  background-color: pink;
}
</style>
