import Vue from 'vue'
import App from './App.vue'
import store from './store'
import locale from "element-ui/lib/locale/lang/en.js";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "bootstrap/dist/css/bootstrap.css";

Vue.use(Element, { locale });

Vue.config.productionTip = false

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
