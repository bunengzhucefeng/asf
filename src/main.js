import Vue from 'vue'
import App from './App.vue'

// add
import $ from 'jquery'
window.$ = $

import * as d3 from 'd3'
window.d3 = d3
// end add --------------------------

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
