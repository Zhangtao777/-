import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from "vant"
import "vant/lib/index.css"
import axios from "axios"
Vue.use(Vant);
Vue.config.productionTip = false

Vue.prototype.http = axios
// 根据屏幕的宽度计算跟标签的字体大小
function calcRem(){
  var w = window.innerWidth;
  if (w <= 500) {
    w = 500;
  }
  document.documentElement.style.fontSize = w / 50 + "px";
}
calcRem();

// 屏幕尺寸发生变化
window.onresize = function(){
  console.log("屏幕尺寸发生变化了");
  calcRem();
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
