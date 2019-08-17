<template>
<!-- v-bind为属性动态绑定数据 -->
    <div class="box">
      <a v-bind:href="'/del?id=' + id">删除</a>
      <img :src="img" alt="">
      <!-- 通过键值对 -->
      <p :[prop]='userName'>动态绑定用户名</p>
      <button :[key] = 'value' >按钮</button>
      <!-- 元素动态绑定样式 {样式名 : data的变量名} -->
      <p :class="{isRed:hasRed}">你真棒喔</p>
      <!-- 实现向左展开和合并 -->
      <button @click="iscollapse=!iscollapse">单击展开和合并</button>
     <div :class="{left:true,collapse:iscollapse}"></div>
      <!-- <div :class="[classA(变量名), classB(变量名)]"></div> -->
    <p :class="[isRed,isUnder]">哈哈哈哈哈哈</p>
    <!-- style绑定 -->
    <p :style="{fontSize:fontSize + 'px'}">我是30号</p>
    </div>
</template>

<script>
// @代表是当前项目根目录,根目录就是指入口文件所在的 目录
import img from '@/assets/logo.png'
export default {
  data () {
    return {
      msg: 'v-bind说明',
      id: 8,
      img: img,
      prop: 'youName',
      key: 'myName',
      value: 'lily',
      userName: 'jack',
      hasRed: false, // 标记当前元素是否应该是红色
      iscollapse: false,
      isRed: 'isRed', // isRed是样式名
      isUnder: 'isUnder', // isUnder是样式名
      fontSize: 30
    }
  }
}
</script>

<style lang="less" scoped>
  .isRed {
    color: red;
  }

  .isUnder {
    text-decoration: underline;
  }

  .left {
    width: 200px;
    height: 300px;
    border: 4px solid pink;
    transition: width 3s;
  }

  .collapse {
    width: 50px;
  }

</style>
