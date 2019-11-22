import Vue from 'vue'
import App from './App.vue'
import "./plugins/bootstrap";
import "./plugins/codemirror";
import "./plugins/mq";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')