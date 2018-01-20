import Parallax from 'parallax-js'

export default {
  methods: {
    setParallax (sceneElementId) {
      const scene = document.getElementById(sceneElementId)

      // check if elements exist
      if (scene) {
        const prllx = new Parallax(scene)
        prllx.friction(0.1, 0.1)
        // console.log(prllx)
      }
    }
  }
}
