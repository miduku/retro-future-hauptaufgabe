<template>
  <div id="tp-article">
    <nuxt/>
  </div>
</template>

<script>
import Parallax from 'parallax-js'

export default {
  data () {
    return {
    }
  },

  mounted () {
    // DOM ready
    this.$nextTick(() => {
      // init
      this.setParallax()
      this.setParagrafsTopFixed()
      this.setHeaderTopFixed()
      this.setParagrafsXTransform()
    })
  },

  beforeMount () {
    // window.addEventListener('mousemove', this.handleMouseMove)
    // window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy () {
    // window.removeEventListener('mousemove', this.handleMouseMove)
    // window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    test () {
      console.log('test')
    },

    randomizer (min, max) {
      return Math.random() * (max - min) + min
    },

    map (value, domainMin, domainMax, rangeMin, rangeMax) {
      return ((value - domainMin) / (domainMax - domainMin)) * (rangeMax - rangeMin) + rangeMin
    },

    handleResize (e) {
      // this.getDocSize()
    },

    handleScroll (e) {
      // console.log(top.getBoundingClientRect().top)
      this.setParagrafsTopFixed()
      this.setHeaderTopFixed()
    },

    setParallax () {
      const scene = document.getElementById('scene')

      // check if elements exist
      if (scene) {
        const prllx = new Parallax(scene)
        prllx.friction(0.1, 0.1)
        // console.log(prllx)
      }
    },

    setHeaderTopFixed () {
      const elHeader = this.$el.querySelector('.header')
      const elHeaderTitle = this.$el.querySelector('.font-title')
      const clientHeightQuarter = this.docHeight() / 4
      const headerBounding = elHeader.getBoundingClientRect()

      if (headerBounding.top >= 0) {
        if (headerBounding.top < clientHeightQuarter) {
          let lineHeight = this.map(headerBounding.top, clientHeightQuarter, 0, 2, 0.5)

          elHeaderTitle.style.lineHeight = lineHeight
        } else {
          elHeaderTitle.style.lineHeight = 2
        }
        // console.log(elHeaderTitle)
      }
    },

    setParagrafsTopFixed () {
      const elText = this.$el.querySelector('.text')
      const elsContainer = elText.querySelectorAll('.text--container')
      const clientHeightQuarter = this.docHeight() / 2

      for (const elContainer of elsContainer) {
        const elsP = elContainer.querySelectorAll('.text--p')
        let containerBounding = elContainer.getBoundingClientRect()

        for (const elP of elsP) {
          if (containerBounding.top >= 0) {
            if (containerBounding.top < clientHeightQuarter) {
              let lineHeight = this.map(containerBounding.top, clientHeightQuarter, 0, 1.6, 0.25)

              elP.style.lineHeight = lineHeight
              // if (lineHeight <= 1.5) {
              //   elP.children[0].style.background = 'transparent'
              // } else {
              //   elP.children[0].style.background = '#fff'
              // }
            } else {
              elP.style.lineHeight = 1.6
            }
          }
        }
      }
    },

    setParagrafsXTransform () {
      const elsTranslate = this.$el.querySelectorAll('.translate')
      for (const el of elsTranslate) {
        el.style.transform = `translateX(${this.randomizer(-15, 15)}em)`
      }

      const elsText = this.$el.querySelectorAll('.text')
      for (const el of elsText) {
        for (const p of el.children) {
          p.style.transform = `translateX(${this.randomizer(-10, 10)}em)`
        }
      }
    },

    getDocSize () {
      this.docWidth()
      this.docHeight()
    },

    getScrollTop () {
      return document.documentElement.scrollTop
    },

    docWidth () {
      // console.log(document.documentElement.clientWidth)
      return document.documentElement.clientWidth
    },

    docHeight () {
      // console.log(document.documentElement.clientHeight)
      return document.documentElement.clientHeight
    }

    // Vuex Stuff (Store)
    // setStoreMouseCoords (coords) {
    //   this.$store.commit('newMouseCoords', coords)
    // }
  }
}
</script>


<style lang="scss">
/**
* STYLES
*/
@import '../assets/css/_vars';
@import '../assets/css/_mixins';

#tp-article {
  .background {
    position: fixed !important;
    width: 100%;
    height: 100vh;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;

    .svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 20%;

      div {
        background: white;
        width: 100%;
        height: 100%;
      }
    }
  }

  .container {
      .content {
        width: 100% - 100/2;
        max-width: $tablet;

          header {
            .font-title {
              position: sticky;
              top: 0;
              width: 0;
              font-size: 5em;
              line-height: 2;

              @include widescreen {
                font-size: 5rem;
              }
            }
          }

          .text {
            mix-blend-mode: multiply;
            min-height: 100vh;
            margin: ((100/3) + vh) 0 75vh;
            position: relative;

            .text--container {
              position: sticky;
              top: 0;
            }

            p {
              letter-spacing: .02em;
              display: inline-block;
              // position: sticky;
              // top: 0;

              @include widescreen {
                font-size: 1rem;
              }

              // span {
              //   background: #fff;
              // }
            }
          }

      }
  }
}
</style>
