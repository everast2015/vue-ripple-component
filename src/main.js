import Vue from 'vue'
import App from './App.vue'
import tabs from 'element-ui';
import router from './router/index'

import 'element-ui/lib/theme-chalk/index.css';
import 'vue2-animate/src/sass/vue2-animate.scss';

Vue.use(tabs);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')