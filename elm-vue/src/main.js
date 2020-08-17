import Vue from 'vue'
import { Picker, Switch, Checkbox, Dialog } from 'vant';
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/iconfont/iconfont.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { axiosRequest, prov } from '@/common/common.js'
import '@/common/common.less'

Vue.use(Picker);
Vue.use(Switch);
Vue.use(Checkbox);
Vue.use(Dialog);

library.add(fas)
library.add(fab)
library.add(far)
Vue.component('fonticon', FontAwesomeIcon);


Vue.config.productionTip = false
Vue.prototype.axiosRequest = axiosRequest
Vue.prototype.prov = prov

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
