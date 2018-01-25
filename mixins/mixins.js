export default {
  methods: {
    map (value, domainMin, domainMax, rangeMin, rangeMax) {
      return ((value - domainMin) / (domainMax - domainMin)) * (rangeMax - rangeMin) + rangeMin
    },

    randomizer (min, max, isRounded = false) {
      const res = Math.random() * (max - min) + min

      if (isRounded) {
        return Math.round(res)
      }

      return res
    },

    docHeight () {
      return document.documentElement.clientHeight
    }
  }
}
