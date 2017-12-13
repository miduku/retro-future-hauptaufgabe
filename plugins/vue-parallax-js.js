// https://github.com/jsnanigans/vue-parallax-js
import Vue from 'vue'
// import VueParallaxJs from '~/node_modules/vue-parallax-js/lib/vue-parallax-js.es'
// import VueParallaxJs from 'vue-parallax-js'

if (process.BROWSER_BUILD) {
  window.onNuxtReady(() => {
    const VueParallaxJs = require('vue-parallax-js')
    Vue.use(VueParallaxJs)
  })
}

// add vue-parallax-js to vue
// Vue.use(VueParallaxJs)
