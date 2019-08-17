<template>
<!-- v-bind 他可以为属性绑定动态数据 -->
  <div class="box">
    <p :class="{isRed : hasRed}">我的字体颜色不确定</p>
    <a :href="'/del?id=' + id">删除</a>
    <button :[key]="val" >按钮</button>
    <p :class="[isRed,isUnder]">你猜我猜不猜</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hasRed: false,
      id: 20,
      key: 'youname',
      val: 'jack',
      isRed: 'isRed',
      isUnder: 'isUnder'
    }
  }
}
</script>

<style lang="less" scoped>
  .box {
    font-size :20px;
    color: brown;
  }
  .isRed {
    color: red;
  }
  .isUnder {
    text-decoration: underline;
  }

</style>
