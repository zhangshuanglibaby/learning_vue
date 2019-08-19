// 这个模块主要实现路由封装

// 1.引入vue
import Vue from 'vue'

// 2.引入vue-router
import VueRouter from 'vue-router'

// 引入组件
import index from '@/components/index.vue'
import product from '@/components/product.vue'

// 3.use : 让vue使用vue-router进行路由管理
Vue.use(VueRouter)

// 4.创建路由对象:实现路由和组件的映射
const router = new VueRouter({
  // 5.添加路由的配置 --通过routes实现路由配置
  routes: [
    /** 常见配置
     * name :当前路由名称
     * path : 路由路径
     * component :当前路由所映射的组件对象
     */
    {
      name: 'index',
      path: '/index',
      component: index
    },
    {
      name: 'product',
      path: '/product',
      component: product
    }
  ]
})

// 暴露路由
export default router
