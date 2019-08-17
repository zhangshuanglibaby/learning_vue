<template>
  <!-- 使用方法类似属性的使用 v-text="变量" -->
  <div class="box">
    <p>这个文件描述v-text的使用</p>
    <p>v-text的作用和插值表达式类似,都是为双标签添加展示内容,但是v-text是将指定的属性完全替换
      标签之间的内容,不管标签之间有什么
    </p>
    <hr>
    <p v-text='msg'></p>
    <p v-text='msg'>{{name}}</p>
    <!-- 拼接字符串 -->
    <p v-text='msg + "嘻嘻嘻"'></p>
    <!-- 使用api -->
    <p v-text='msg.toUpperCase()'></p>
    <!-- 简单的运算 -->
    <p v-text='age + 20'></p>
    <!-- 使用三元表达式 -->
    <p v-text="age>18?'成年':'未成年'"></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello world',
      name: 'jack',
      age: 28
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  font-size: 20px;
  color: blueviolet;
}
</style>
