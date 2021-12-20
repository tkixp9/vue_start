import Vue from 'vue'
import Meta from 'vue-meta'
import './assets/less/common/common.less';
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.use(Meta)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
