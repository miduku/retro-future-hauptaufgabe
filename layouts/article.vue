<template>
  <nuxt id="tp-article"/>
</template>

<script>
import mixins from '~/mixins/mixins'
import mixinsParallax from '~/mixins/mixinsParallax'

export default {
  mixins: [mixins, mixinsParallax],

  data () {
    return {
    }
  },

  mounted () {
    // DOM ready
    this.$nextTick(() => {
      // init
      this.setParallax(this.$route.name)
      this.setParagrafsTopFixed()
      this.setHeaderTopFixed()
      this.setParagrafsXTransform()
    })
  },

  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleResize (e) {
      // this.getDocSize()
    },

    handleScroll (e) {
      // console.log(top.getBoundingClientRect().top)
      this.setParagrafsTopFixed()
      this.setHeaderTopFixed()
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
        const elsP = elContainer.querySelectorAll('p')
        let containerBounding = elContainer.getBoundingClientRect()

        for (const elP of elsP) {
          if (containerBounding.top >= 0) {
            if (containerBounding.top < clientHeightQuarter) {
              let lineHeight = this.map(containerBounding.top, clientHeightQuarter, 0, 1.6, 0.25)

              elP.style.lineHeight = lineHeight
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
    }

    // getDocSize () {
    //   this.docWidth()
    //   this.docHeight()
    // },

    // getScrollTop () {
    //   return document.documentElement.scrollTop
    // },

    // docWidth () {
    //   // console.log(document.documentElement.clientWidth)
    //   return document.documentElement.clientWidth
    // },

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
    overflow: hidden;

    .img {
      object-fit: cover;
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 15%;

      div {
        // background: white;
        width: 100%;
        height: 100%;
      }
    }
  }

  &.container {
      .content {
        width: 100% - 100/2;
        max-width: $tablet;

          header {
            position: sticky;
            top: 0;

            .font-title {
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
            pointer-events: all;

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
