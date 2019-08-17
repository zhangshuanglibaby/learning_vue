<template>
    <div>
        <input type="text" v-model="firstName"> - <input type="text" v-model="secondName">
        <p>{{joinName}}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      firstName: '',
      secondName: ''
    }
  },
  computed: {
    joinName () {
      return this.firstName.substr(0, 1).toUpperCase() + this.firstName.substr(1) + ':' + this.secondName.substr(0, 1).toUpperCase() + this.secondName.substr(1)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
