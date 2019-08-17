<template>
  <div class="box">
    <p>成绩评定</p>
    <input type="number" v-model="score">
    <p v-if='score>=90'>A</p>
    <p v-else-if='score>=80'>B</p>
    <p v-else-if="score>=70">C</p>
    <p v-else-if="score>=60">D</p>
    <p v-else>E</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      score: 88
    }
  }
}
</script>

<style lang="less" scoped>
</style>
