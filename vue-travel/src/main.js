import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'common/css/reset.css'
import 'common/css/border.css'
import 'common/css/iconfont.css'
import 'common/stylus/index.styl'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
FastClick.attach(document.body)

// 第三方框架： https://github.com/vuejs/awesome-vue#pull-to-refresh
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
