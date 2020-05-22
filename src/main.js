import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import "@/common/styuls/iconmoon.styl";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, //配置路由器, 内部路由才生效
  store, //配置vuex核心管理对象 组件中可以通过$store得到$store对象
}).$mount('#app')