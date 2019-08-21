<template>
<!-- 子传父,要利用emit发射 -->
  <div class="son">
    <p>这是子组件,我的爸爸给我取名叫{{sName}}</p>
    <p>我最近交了一个女朋友,他的名字叫{{sonGFname}}</p>
    <button @click='tellName'>点击告诉我爸爸听我女朋友的名字</button>
    <p>我的妹妹告诉我有好事发生了,她交了个男朋友,名字叫{{mySisterBFname}}</p>
  </div>
</template>
<script>
// 引入事件总线
import bus from '@/utils/myvue.js'
export default {
  // 使用props设置需要接受的参数
  props: ['sName'],
  data () {
    return {
      sonGFname: 'lisa',
      mySisterBFname: '??'
    }
  },
  methods: {
    tellName () {
      // this.$emit('事件名称',要发送的任意数据)
      this.$emit('getsonGFname', this.sonGFname)
    }
  },
  mounted () {
    // this.$on('事件名称',事件处理函数)
    bus.$on('getSisterBFname', (data) => {
      this.mySisterBFname = data
    })
  }
}
</script>
<style lang="less" scoped>
.son {
  width: 80%;
  background-color: pink;
}
</style>
