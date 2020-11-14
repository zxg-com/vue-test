// 导入vue.js
import Vue from 'vue'

//导入vue根组建
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);


new Vue({
  render: h => h(App),
}).$mount('#app')
