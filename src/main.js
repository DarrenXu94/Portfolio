import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import VueScrollTo from 'vue-scrollto'
import 'vue-material/dist/vue-material.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChalkboardTeacher, faServer, faKeyboard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChalkboardTeacher, faServer, faKeyboard)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueScrollTo)
Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
