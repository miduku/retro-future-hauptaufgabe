// https://github.com/wagerfield/parallax
// let Parallax
// if (process.browser) {
//   Parallax = require('parallax-js')
// }
import Parallax from 'parallax-js'

const scene = document.getElementById('scene')

// check if elements exist
if (scene) {
  const prllx = new Parallax(scene)
  prllx.friction(0.1, 0.1)
  // prllx.selector = '.m-wrapper'
  console.log(prllx)
}
