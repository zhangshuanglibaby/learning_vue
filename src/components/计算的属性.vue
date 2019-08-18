<template>
    <div>
        <!-- <input type="text" v-model="firstName"> - <input type="text" v-model="secondName">
        <p>{{joinName}}</p> -->
        <input type="text" v-model="first"> - <input type="text" v-model="second">
        <p> {{joinName}}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      first: '',
      second: ''
      //   joinName () {
      //     console.log(123)
      //   // return this.firstName.substr(0, 1).toUpperCase() + this.firstName.substr(1) + ':' + this.secondName.substr(0, 1).toUpperCase() + this.secondName.substr(1)
      //   return this.first + ':' + this.second

    // }
    }
  },
  computed: { /// 不能实现异步操作
    joinName () {
      // console.log(123)
      // return this.firstName.substr(0, 1).toUpperCase() + this.firstName.substr(1) + ':' + this.secondName.substr(0, 1).toUpperCase() + this.secondName.substr(1)
      // setTimeout(() => {
      //   return this.first + ':' + this.second
      // },1000)
      return this.first + ':' + this.second
    }
  }
}
</script>

<style lang="less" scoped>

</style>
