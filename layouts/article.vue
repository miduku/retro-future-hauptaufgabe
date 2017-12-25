<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  mounted () {
    // DOM ready
    this.$nextTick(() => {
      // init
      this.setParagrafsFixed()
      this.setParagrafsTransform()
    })
  },

  beforeMount () {
    window.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy () {
    window.removeEventListener('mousemove', this.handleMouseMove)
    window.removeEventListener('resize', this.handleResize)
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

    handleMouseMove (e) {
      let x, y
      let doc = {
        w: this.docWidth(),
        h: this.docHeight()
      }

      if (typeof e.clientX !== 'undefined' && typeof e.clientX !== 'undefined') {
        x = e.clientX
        y = e.clientY
      }

      let docHalf = [doc.w / 2, doc.h / 2]

      const mWrappers = this.$el.querySelectorAll('.m-wrapper')
      for (const wrapper of mWrappers) {
        if (wrapper.classList.contains('m-wrapper-01')) {
          wrapper.style.transform = `translate(${(docHalf[0] - x) * 0.075}px, ${(docHalf[1] - y) * 0.075}px)`
        } else if (wrapper.classList.contains('m-wrapper-02')) {
          wrapper.style.transform = `translate(${(docHalf[0] - x) * 0.05}px, ${(docHalf[1] - y) * 0.05}px)`
        } else if (wrapper.classList.contains('m-wrapper-03')) {
          wrapper.style.transform = `translate(${(docHalf[0] - x) * 0.025}px, ${(docHalf[1] - y) * 0.025}px)`
        }
      }
    },

    handleResize (e) {
      // this.getDocSize()
    },

    handleScroll (e) {
      // console.log(e)
      // this.docHeight()
      // let top = this.$el.querySelector('.text')
      // console.log(top.getBoundingClientRect().top)
      this.setParagrafsFixed()
    },

    setParagrafsFixed () {
      const elsText = this.$el.querySelectorAll('.text')
      const clientHeightHalf = this.docHeight() / 4

      for (const el of elsText) {
        for (const wrapper of el.children) {
          for (const p of wrapper.children) {
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
      }
    },

    setParagrafsTransform () {
      const elsTranslate = this.$el.querySelectorAll('.translate')
      for (const el of elsTranslate) {
        el.style.transform = `translateX(${this.randomizer(-15, 15)}em)`
      }

      const elsText = this.$el.querySelectorAll('.text')
      for (const el of elsText) {
        for (const wrapper of el.children) {
          for (const p of wrapper.children) {
            p.style.transform = `translateX(${this.randomizer(-10, 10)}em)`
          }
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

.background {
  position: fixed;
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
        }

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
          // position: static;
          margin: ((100/3) + vh) 0 75vh;

          p {
            letter-spacing: .02em;
            display: inline-block;
            position: sticky;
            top: 1px;
            // position: relative;

            @include widescreen {
              font-size: 1rem;
            }

            // &:first-child:first-letter {
            //   // color: #fff;
            //   // font-family: 'Playfair Display', serif !important;
            //   // font-family: 'Barlow Semi Condensed', serif !important;
            //   font-size: 500%;
            //   float: left;
            //   position: absolute;
            //   right: 0
            // }

            span {
              background: #fff;
              // position: relative;
            }
          }
        }

    }
}
</style>
