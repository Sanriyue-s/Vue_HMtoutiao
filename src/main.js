import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入全局样式
import './style/index.less'
//引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
//
import 'amfe-flexible'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
