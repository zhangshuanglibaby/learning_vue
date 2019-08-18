<template>
  <div class="box">
    <input type="text" v-model="first">
    <input type="text" v-model="second">
    <p>{{fullName}}</p>
    <p>{{fullName}}</p>
    <p>{{fullName}}</p>
    <p>{{fullName}}</p>
    <p>{{fullName}}</p>
    <p>{{fullName}}</p>

  </div>
</template>
<script>
export default {
  data () {
    return {
      first: '',
      second: ''
    }
  },
  methods: {
    // fullName () {
    //   console.log(123)
    //   return this.first + ':' + this.second
    // }
  },
  computed: {
    fullName () {
      console.log(123)
      return this.first + ':' + this.second
    }
  }
}
</script>
<style lang="less" scoped>
</style>
