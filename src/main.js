import Vue from 'vue'

// 引入路由模块
import router from '@/router/market.js'
import App from './App.vue'

// 引入单页组件
// import test from './components/插值表达式.vue'
// import test from './components/v-text.vue'
// import test from './components/v-html.vue'
// import text from './components/v-bind.vue'
// import text from './components/v-for.vue'
// import text from './components/v-bind02.vue'
// import text from './components/v-model.vue'
// import text from './components/数据展示案例.vue'
// import text from './components/计算的属性.vue'
// import text from './components/数据展示案例2.vue'
// import text from './components/v-on.vue'
// import text from './components/v-if v-show.vue'
// import text from './components/v-if展示成绩.vue'
// import text from './components/数据展示案例3.vue'
// import text from './components/过度动画-css类样式的方式.vue'
// import text from './components/为什么要使用计算属性.vue'
// import text from './components/侦听器属性watch.vue'
// import text from './components/深度侦听.vue'
// import text from './components/过度动画-使用类样式添加过度动画.vue'
// import text from './components/axios-get.vue'
// import text from './components/axios-post.vue'
// import text from './components/使用封装的axios.vue'
// import text from './components/index.vue'

Vue.config.productionTip = false

new Vue({
  // 注入路由,让当前应用使用我们所配置好的路由
  router,
  render: h => h(App)
}).$mount('#app')
