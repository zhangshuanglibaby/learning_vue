<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text" v-model="brand.bNum" ref='id' v-myfocus v-mycolor='"purple"'/> 品牌名称:
      <input type="text" v-model="brand.bName" @keydown.enter="add" v-mycolor='"green"'/>
      <input type="button" value="添加"/>
    </div>
    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入搜索条件"  v-model="searchKey"/>
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
          <tr v-for='(val,index) in search' :key='index'>
            <td>{{val.bNum}}</td>
            <td>{{val.bName}}</td>
            <td>{{val.time | timeFormat('/',':')}}</td>
            <td>
              <a href="#" @click="delList(index)">删除</a>
            </td>
          </tr>
          <!-- 当没有数据,显示提示 -->
          <tr v-show='search.length === 0'>
            <td colspan="4">没有数据了,快去添加吧</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { myfocus, mycolor } from '@/tools/userDirectives.js'
import { timeFormat } from '@/tools/userFilters.js'
export default {
  data () {
    return {
      searchKey: '',
      // 创建一组数据 -- 对象数组形式
      brandList: [
        {
          bNum: 1,
          bName: '法拉利',
          time: new Date()
        },
        {
          bNum: 2,
          bName: '劳斯莱斯',
          time: new Date()
        },
        {
          bNum: 3,
          bName: '路虎',
          time: new Date()
        }
      ],
      // 添加的数据
      brand: {
        bNum: '',
        bName: ''
      }
    }
  },
  methods: {
    add () {
      this.brand.time = new Date()
      this.brandList.push({ ...this.brand })
      this.brand.bNum = ''
      this.brand.bName = ''
    },
    delList (index) {
      this.brandList.splice(index, 1)
    }
  },
  // 组件加载完毕（挂载）会自动调用的函数
  // mounted () {
  //   this.$refs.id.focus()
  // }
  // 创建自定义指令 --需要使用钩子函数
  directives: {
    myfocus, mycolor
    // myfocus: {
    //   inserted (el) {
    //     el.focus()
    //   }
    // }
    // mycolor: {
    //   inserted (el, binding) {
    //     el.style.color = binding.value
    //   }
    // }
  },

  // 定义过滤器
  filters: {
    timeFormat
    // timeFormate (time, sep1, sep2) {
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
    search () {
      // let obj = this.brandList.filter(e => {
      //   return e.bName.indexOf(this.searchKey) !== -1
      // })
      // return obj
      return this.brandList.filter(e => e.bName.indexOf(this.searchKey) !== -1)
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
