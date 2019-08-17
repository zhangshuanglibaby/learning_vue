<template>
<!-- 用于循环生成动态结构 -->
    <div class="box">
      <!-- 遍历数组 -->
      <!-- 数组数组,可以遍历出数组的val和index(值和索引) -->
      <!-- :key 可以唯一标识当前数据行,后期的操作可以提高效率,这个值必须是唯一值 -->
      <ul>
        <li v-for='(val,index) in arr' :key='index'>{{val + ':' + index}}</li>
      </ul>
      <!-- 遍历对象 -->
      <!-- 对于对象可以遍历出val,key,index, -->
      <div v-for='(val,key) in obj' :key='key'>{{key + ':' + val}}</div>
      <!-- 遍历数组对象 -->
      <table border="1" width="400px">
        <thead>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
        </thead>
        <tbody>
          <tr v-for='(val,index) in userList' :key='index'>
            <!-- <td>{{val.name}}</td>
            <td>{{val.age}}</td>
            <td>{{val.gender}}</td> -->
            <!-- 这是另一种方法,遍历数组的每个对象 -->
            <!-- 缺点是屏蔽了结构的细节 -->
            <td v-for='(v,k) in val' :key='k'>{{v}}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [1, 3, 5, 7, 9],
      obj: {
        name: 'jack',
        age: 20,
        gender: '男'
      },
      userList: [
        {
          name: '小白白',
          age: 20,
          gender: '男'
        }, {
          name: '小明明',
          age: 21,
          gender: '女'
        }, {
          name: '小红红',
          age: 22,
          gender: '男'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .box {
    font-size : 20px;
    color :blueviolet;
  }
</style>
