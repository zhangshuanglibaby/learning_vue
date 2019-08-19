// 这个模块主要实现路由封装

// 1.引入vue
import Vue from 'vue'
// 2.引入vue-router
import VueRouter from 'vue-router'

// 引入组件
import market from '@/components/market.vue'
import marketProduct from '@/components/marketProduct.vue'
import snacks from '@/components/snacks.vue'
import drink from '@/components/drink.vue'
import fruit from '@/components/fruit.vue'

// 3.use :让vue使用vue-router进行路由管理
Vue.use(VueRouter)

// 4.创建router对象,实现路由映射组件
const router = new VueRouter({
  // 使用routes进行路由配置
  routes: [
    // 添加自动启动路由--默认一开始就是首页
    {
      name: 'default',
      path: '/',
      // 重定向到首页
      redirect: { name: 'market' }
    },
    {
      // 路由名称
      name: 'market',
      // 路由路径
      path: '/market',
      // 组件
      component: market
    },
    {
      name: 'marketProduct',
      path: '/marketProduct/:id',
      component: marketProduct,
      children: [
        {
          name: 'snacks',
          path: 'snacks',
          component: snacks
        },
        {
          name: 'drink',
          path: 'drink',
          component: drink
        },
        {
          name: 'fruit',
          path: 'fruit',
          component: fruit
        }
      ]
    }
  ]
})

// 暴露
export default router
