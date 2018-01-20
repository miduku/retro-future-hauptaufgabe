export default {
  methods: {
    map (value, domainMin, domainMax, rangeMin, rangeMax) {
      return ((value - domainMin) / (domainMax - domainMin)) * (rangeMax - rangeMin) + rangeMin
    },

    randomizer (min, max) {
      return Math.random() * (max - min) + min
    },

    docHeight () {
      // console.log(document.documentElement.clientHeight)
      return document.documentElement.clientHeight
    }
  }
}
