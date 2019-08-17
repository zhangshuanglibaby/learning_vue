<template>
    <div class="box">
      <p>{{msg}}</p>
      <!-- <p value='{{msg}}'></p>  不能当做标签的属性来使用 -->
      <!-- 拼接字符串 -->
      <p>{{msg + 'lily'}}</p>
      <!-- 实现简单的运算表达式 -->
      <p>{{age + 5}}</p>
      <!-- 使用api -->
      <p>{{msg.toUpperCase()}}</p>
      <p>{{msg.split(',')}}</p>
      <!-- 判别性别 -->
      <p>{{gender?'男':'女'}}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'good girl',
      age: 20,
      gender: false
    }
  }
}
</script>

<style lang="less" scoped>
  .box {
    font-size: 30px;
    color: blueviolet;
  }
</style>
