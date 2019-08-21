// 模拟使用父子组件

// 引入vue
import Vue from 'vue'

// 引入vue-router
import VueRouter from 'vue-router'

// 引入组件
import father from '@/components/father-子传子.vue'

// 使用use,让vue使用vue-router进行对路由的管理
Vue.use(VueRouter)

// 创建router对象
const router = new VueRouter({
  // 使用routes进行配置
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'father' }
    },
    {
      name: 'father',
      path: '/father',
      component: father
    }]
})

// 暴露
export default router
