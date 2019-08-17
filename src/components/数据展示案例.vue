<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text" v-model="addData.bNum" v-mycolor='"red"'/>
      品牌名称:
      <input type="text" v-model="addData.bName" v-myfocus v-mycolor='"blue"'/>
      <input type="button" value="添加" @click="addList"/>
    </div>
    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入搜索条件" v-model="userKey"/>
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
            <td>{{val.time | timeFormat('-',':')}}</td>
            <td>
              <a href="#" @click.prevent="delList(index)">删除</a>
            </td>
          </tr>
          <tr v-show="search.length === 0">
            <td colspan="4">没有数据可删了,快去添加把</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 这种方法会只能固定一个元素聚焦,把代码写死了,不推荐
// 我们推荐需要什么就添加什么方法
// window.onload = () => {
//   document.querySelector('#id').focus()
// }
// 引入定义好的全局自定义指令
// 使用到了对象的解构
import { myfocus, mycolor } from '@/tools/userDirectives.js'
import { timeFormat } from '@/tools/userFilters.js'

export default {
  data () {
    return {
      userKey: '',
      // 建立数据
      brandList: [
        {
          bNum: 1,
          bName: '宝马',
          time: new Date()
        },
        {
          bNum: 2,
          bName: '奔驰',
          time: new Date()
        },
        {
          bNum: 3,
          bName: '保时捷',
          time: new Date()
        }
      ],
      addData: {
        bNum: '',
        bName: ''
      }
    }
  },

  // 计算机属性
  computed: {
    search () {
      // 实现数据筛选——-需要对比
      let arr = []
      for (let i = 0; i < this.brandList.length; i++) {
        if (this.brandList[i].bName.indexOf(this.userKey) !== -1) {
          arr.push(this.brandList[i])
        }
      }
      return arr
    }
  },

  methods: {
    addList () {
      this.addData.time = new Date()
      this.brandList.push({ ...this.addData })
      this.addData.bNum = ''
      this.addData.bName = ''
    },
    delList (index) {
      this.brandList.splice(this.brandList.index, 1)
    }
  },
  // 但是这种方法也是把id写死了,还是做不到想用就用,自由使用得特点
  // 当组件加载(挂载)完毕就会自动调用的函数
  // mounted () {
  //   this.$refs.id.focus()
  // },
  // 定义当前组件的局部自定义指令 --directive
  // directives: {
  //   // 指令名称
  //   myfocus: {
  //     // 配置是钩子函数
  //     // 参数el是哪个dom元素引用了指令,谁就是el
  //     // 使用方法是v-指令名称
  //     inserted (el) {
  //       el.focus()
  //     }
  //   }
  // }
  // 实现全局自定义组件的注册
  directives: {
    myfocus, mycolor

    // mycolor: {
    //   inserted (el, binding) {
    //     // binding.value就是你使用指令时,为指令所绑定的数据
    //     el.style.color = binding.value
    //   }
    // }

  },
  // 创建过滤器
  filters: {
    // 这是全局过滤器的调用
    timeFormat

    // 这是局部过滤器的操作
    // timeFormat: (time, sep1, sep2) => {
    //   // console.log(time)
    //   let Y = time.getFullYear()
    //   let M = time.getMonth() + 1
    //   let D = time.getDate()
    //   let h = time.getHours()
    //   let m = time.getMinutes()
    //   let s = time.getSeconds()
    //   return Y + sep1 + M + sep1 + D + ' ' + h + sep2 + m + sep2 + s
    // }
  }
}
</script>

<style lang="less" scope>
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
