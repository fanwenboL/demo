// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import Haederswp from './haederswp'
import Swp from './swp'
import Sestion from './sestion'
import Hotbuy from './hotbuy'
import Feeter from './feeter'
import Hui from './hui'
Vue.component(Hui.name, Hui);
Vue.component(Haederswp.name, Haederswp);
Vue.component(Swp.name, Swp);
Vue.component(Sestion.name, Sestion);
Vue.component(Hotbuy.name, Hotbuy);
Vue.component(Feeter.name, Feeter);
Vue.use(MintUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
