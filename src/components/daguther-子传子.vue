<template>
<!-- 子传子需要使用一个共同点,利用事件总线 -->
    <div class="daguther">
      <p>这也是子组件,我是女儿{{dgName}}</p>
      <p>我最近交了个男朋友,他的名字叫{{dagutherBFname}}</p>
      <button @click="tellName">点击告诉我哥哥我男朋友的名字</button>
    </div>
</template>
<script>
// 引入事件总线
import bus from '@/utils/myvue.js'
export default {
  props: ['dgName'],
  data () {
    return {
      dagutherBFname: 'Tom'
    }
  },
  methods: {
    tellName () {
      bus.$emit('getSisterBFname', this.dagutherBFname)
    }
  }
}
</script>
<style lang="less" scoped>
  .daguther {
    width: 80%;
    background-color:darkseagreen;
  }
</style>
