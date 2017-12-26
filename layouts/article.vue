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
    },

    setParallax () {
      const scene = document.getElementById('scene')

      // check if elements exist
      if (scene) {
        const prllx = new Parallax(scene)
        prllx.friction(0.1, 0.1)
        console.log(prllx)
      }
    },

    setParagrafsTopFixed () {
      const elsText = this.$el.querySelectorAll('.text')
      const clientHeightHalf = this.docHeight() / 4

      for (const el of elsText) {
        for (const p of el.children) {
          let pBounding = p.getBoundingClientRect()
          if (pBounding.top >= 0) {
            if (pBounding.top < clientHeightHalf) {
              let lineHeight = this.map(pBounding.top, clientHeightHalf, 0, 1.6, 0.25)
              let backgroundAlpha = this.map(pBounding.top, clientHeightHalf, clientHeightHalf / 3, 1, 0)

              p.style.lineHeight = lineHeight
              p.children[0].style.background = `rgba(255, 255, 255, ${backgroundAlpha})`
            } else {
              p.style.lineHeight = 1.6
              p.children[0].style.background = `rgba(255, 255, 255, 1)`
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
  }

  .container {
      .content {
        width: 100% - 100/2;
        max-width: $tablet;

          header {
            .font-title {
              position: absolute;
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

            p {
              letter-spacing: .02em;
              display: inline-block;
              position: sticky;
              top: 0;

              @include widescreen {
                font-size: 1rem;
              }

              span {
                background: #fff;
              }
            }
          }

      }
  }
}
</style>
