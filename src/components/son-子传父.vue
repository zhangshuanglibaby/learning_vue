<template>
<!-- 子传父,要利用emit发射 -->
  <div class="son">
    <p>这是子组件,我是儿子{{sName}}</p>
    <p>我最近交了一个女朋友,他的名字叫{{sonGFname}}</p>
    <button @click='tellName'>点击告诉我爸爸听我女朋友的名字</button>

  </div>
</template>
<script>
export default {
  // 使用props设置需要接受的参数
  props: ['sName'],
  data () {
    return {
      sonGFname: 'lisa'
    }
  },
  methods: {
    tellName () {
      // this.$emit('事件名称',要发送的任意数据)
      this.$emit('getsonGFname', this.sonGFname)
    }
  }
}
</script>
<style lang="less" scoped>
.son {
  background-color: pink;
}
</style>
