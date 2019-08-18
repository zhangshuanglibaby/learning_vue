<template>
    <div>
        <button @click="isShow=!isShow">点我快闪啊</button>
        <transition enter-active-class="animated bounceInUp"
                    leave-active-class="animated zoomOut">
          <p v-show="isShow">~~~~~~~~一个美女飘过~~~~~~~~~~~~</p>
        </transition>

    </div>
</template>
<script>
import '@/styles/animate.css'
export default {
  data () {
    return {
      isShow: false
    }
  }
}
</script>
<style lang="less" scoped>
  p {
    width: 500px;
    margin: 30px;
  }
</style>
