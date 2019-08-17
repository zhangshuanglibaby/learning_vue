// 实现文章的增删改查

<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text" v-model="addList.bNum" v-mycolor='"purple"'/> 品牌名称:
      <input type="text" v-model="addList.bName" v-myfocus v-mycolor='"blue"'/>
      <input type="button" value="添加" @click="add"/>
    </div>
    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入搜索条件" v-model="searchKey" v-mycolor='"red"'/>
    </div>
    <div>
      <table class="tb">
        <thead>
          <tr>
            <th>编号</th>
            <th>品牌名称</th>
            <th>创立时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <!-- 使用v-for循环动态生成数据 -->
          <tr v-for="(val,index) in search" :key='index'>
            <td>{{val.bNum}}</td>
            <td>{{val.bName}}</td>
            <td>{{val.time | timeFormat('/',':')}}</td>
            <td>
              <a href="#" @click="del(index)">删除</a>
            </td>
          </tr>
          <!-- 在无数据的时候,需提醒 -->
          <tr v-show="search.length === 0">
            <td colspan = 4> 没有数据了,快去添加吧</td>
          </tr>
          <!-- <tr v-show="search === false">
            <td colspan = 4>抱歉,查不到相关的数据</td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { myfocus, mycolor } from '@/tools/userDirectives.js'
import { timeFormat } from '@/tools/userFilters.js'
// window.onload = () => {
//   document.querySelector('#id').focus()
// }
export default {
  data () {
    return {
      searchKey: '',
      // 穿件一组数据
      brandList: [
        {
          bNum: 1,
          bName: '大众',
          time: new Date()
        },
        {
          bNum: 2,
          bName: '马自达',
          time: new Date()
        },
        {
          bNum: 3,
          bName: '凯迪拉克',
          time: new Date()
        }
      ],
      addList: {
        bNum: '',
        bName: ''
      }
    }
  },

  methods: {
    // 增加数据
    add () {
      // 往brandList里面增加
      this.addList.time = new Date()
      this.brandList.push({ ...this.addList })
      this.addList.bNum = ''
      this.addList.bName = ''
    },

    // 删除数据 --- 根据索引
    del (index) {
      // 数组移除数据
      this.brandList.splice(index, 1)
    }
  },

  // 当组件加载完毕后(挂载)自动会调入
  // mounted () {
  //   this.$refs.id.focus()
  // }

  // 创建自定义指令
  directives: {
    myfocus, mycolor
    // myfocus: {
    //   inserted (el) {
    //     // el就是当前的元素
    //     el.focus()
    //   }
    // }
    // mycolor: {
    //   inserted (el, binding) {
    //     el.style.color = binding.value
    //   }
    // }
  },

  // 创建过滤器
  filters: {
    timeFormat
    // timeFormat (time, sep1, sep2) {
    //   let Y = time.getFullYear()
    //   let M = time.getMonth() + 1
    //   let D = time.getDate()
    //   let h = time.getHours()
    //   let m = time.getMinutes()
    //   let s = time.getSeconds()
    //   return Y + sep1 + M + sep1 + D + ' ' + h + sep2 + m + sep2 + s
    // }
  },

  // 定义计算属性
  computed: {
    // search () {
    //   let arr = []
    //   for (let i = 0; i < this.brandList.length; i++) {
    //     if (this.brandList[i].bName.indexOf(this.searchKey) !== -1) {
    //       arr.push(this.brandList[i])
    //     }
    //   }
    //   return arr
    // }
    search () {
      let obj = this.brandList.filter(e => {
        return e.bName.indexOf(this.searchKey) !== -1
      })
      return obj
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
