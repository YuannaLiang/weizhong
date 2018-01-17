
import './commons/hotcss';
import Vue from 'vue'
import App from './App'
import router from './routes.js'
import './assets/sass/main.scss'
import './assets/static/fonts/iconfont.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
