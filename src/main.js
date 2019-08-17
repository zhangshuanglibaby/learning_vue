import Vue from 'vue'
// import App from './App.vue'

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
import text from './components/数据展示案例3.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(text)
}).$mount('#app')
