<template>
  <div class="show">
      <button @click="isShow=!isShow">单击显示和隐藏</button>
    <p v-if="isShow">v-if控制的内容</p>
    <p v-show="isShow">v-show控制的内容</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: true
    }
  }
}
</script>

<style lang="less" scoped>
</style>
