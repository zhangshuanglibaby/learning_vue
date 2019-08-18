<template>
  <div>
    <input type="text" v-model="currentUser.name">
    <input type="text" v-model="currentUser.age">
    <p>{{currentUser.name + ':' + currentUser.age}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentUser: {
        name: 'jack',
        age: 20
      }
    }
  },

  // 深度侦听
  watch: {
    // 1.常规方式  特点任何一个属性值发生变化都会触发
    // currentUser: {
    //   handler (newV, oldV) {
    //     console.log(newV, oldV)// 返回的是对象
    //   },
    //   deep: true
    // }

    // 2.常用方式
    'currentUser.name' (newV, oldV) {
      console.log(newV, oldV)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
