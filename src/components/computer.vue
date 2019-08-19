<template>
  <div class="computer">
    <p>这是电脑的详情信息</p>
  </div>
</template>

<script>
export default {
  // 当页面跳转到这里时,会自动触发这里的操作
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style lang="less" scoped>
</style>
