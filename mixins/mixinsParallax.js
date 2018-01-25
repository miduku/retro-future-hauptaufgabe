import Parallax from 'parallax-js'

export default {
  methods: {
    setParallax (scene) {
      const s = document.querySelector(scene)
      // console.log(scene)

      // check if elements exist
      if (s) {
        const prllx = new Parallax(s)
        prllx.friction(0.1, 0.1)
        // console.log(prllx)
      }
    }
  }
}
