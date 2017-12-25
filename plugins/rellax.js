// https://github.com/dixonandmoe/rellax
// https://medium.com/@codebeast_/why-your-third-party-plugin-dont-work-in-nuxt-and-how-to-fix-it-d1a8caadf422
// import Vue from 'vue'
// import Rellax from 'rellax'

// Vue.use(Rellax)
// export default Rellax

const el = document.querySelectorAll('.rellax')
let Rellax

if (process.browser) {
  Rellax = require('rellax')
}

// check if element exists
if (el[0]) {
  Rellax('.rellax')
}
