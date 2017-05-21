console.log('My javascript')

import Vue from 'vue'
import App from './src/App.vue'
import router from './src/router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
