<template>
  <div class="father">
    <p>这是父组件,{{fatherName}},我的儿子他叫{{sonName}},我的女儿她叫{{dagutherName}}</p>
    <p>最近我们家有喜事发生,我们家儿子交女朋友了,她的名字叫{{mysonGFname}}</p>
    <button @click="tellName">点击告诉我儿子的名字</button>
    <!-- 使用子组件 -->
    <son :sName='sonName' @getsonGFname='showsonGFname'></son>
    <daguther :dgName='dagutherName'></daguther>
  </div>
</template>
<script>
// 引入要使用的子组件
import son from '@/components/son-子传子.vue'
import daguther from '@/components/daguther-子传子.vue'
export default {
  // 注册子组件
  components: {
    son, daguther
  },
  data () {
    return {
      fatherName: '我是爸爸',
      sonName: '??',
      dagutherName: 'rose',
      mysonGFname: '??'
    }
  },
  methods: {
    tellName () {
      this.sonName = 'little jack'
    },
    showsonGFname (data) {
      // console.log(data)  //此时的data就是由子元素发射过来的数据
      this.mysonGFname = data
    }
  }
}
</script>
<style lang="less" scoped>
.father {
  background-color: yellow;
}
</style>
