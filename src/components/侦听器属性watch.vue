<template>
  <div>
    <input type="text" v-model="first">
    <input type="text" v-model="second">
    <p>{{fullName}}</p>
    <p>{{first}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      first: '',
      second: '',
      fullName: ''
    }
  },
  // 添加侦听器 ---不需要调用,自动会触发
  watch: {
    first (newV, oldV) {
      // 只有出发了first才会触发这里
      this.fullName = this.first + '--' + this.second
      console.log(newV, oldV)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
