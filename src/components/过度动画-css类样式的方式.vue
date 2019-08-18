<template>
    <div>
        <button @click="isShow=!isShow">点击我闪现</button>
        <!-- 1.把要添加过度动画的元素放到transition组件中 -->
        <!-- 2.为transition设置name属性 -->
        <transition name='move'>
          <p v-show="isShow">~~~~~~一个美女路过</p>
        </transition>
    </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false
    }
  }
}
</script>
<style lang="less" scoped>
//添加不同的状态
.move-enter {
  margin-left: 200px;
  opacity: 0;
}
.move-enter-active {
  transition: all 1s;
  opacity: .5;
  color: brown
}
.move-enter-to {
  margin-left: 0px;
  opacity: 1;
  color:crimson
}
.move-leave {
 margin-left: 0px;
}
.move-leave-active {
transition: all 1s;
color: chartreuse;
}
.move-leave-to {
  margin-top: 200px;
  color: darkmagenta
}
</style>
