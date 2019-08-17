<template>
    <div class="on">
      <!-- v-on:事件类型="事件处理函数(参数)"-->
      <button v-on:click='dosome($event,"jack")'>点我啊</button>
      <button v-on:[type] = 'dothis'>自由点我</button>
      <!-- 阻止事件默认行为 -->
      <a href="https://www.baidu.com/" @click.prevent='sayHi'>单击我</a>
      <!-- 键盘按下事件 -->
      <input type="text" v-model="key" @keydown.13="showmsg">
      <!-- 单击一次 -->
      <button @click.once="justOne">只有一次机会</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      key: '',
      msg: 'hello',
      type: 'dblclick'
    }
  },
  methods: {
    justOne () {
      console.log('只有一次')
    },
    showmsg () {
      console.log(this.key)
    },
    sayHi () {
      alert('你好呀')
    },
    dosome (event, name) {
      console.log(event)
      console.log(name)
    },
    dothis () {
      console.log('你好呀')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
