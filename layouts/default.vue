<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      constDeg: Number,
      deg: Number
    }
  },

  mounted () {
    let rand = this.randomizer(-15, 15)
    this.constDeg = rand
    this.deg = this.constDeg

    // DOM ready
    this.$nextTick(() => {
      // init
      this.docWidth()
      this.docHeight()

      let elsRotate = this.$el.querySelectorAll('.rotate')
      for (const el of elsRotate) {
        el.style.transform = `rotate(${this.deg}deg)`
      }

      let elsTranslate = this.$el.querySelectorAll('.translate')
      for (const el of elsTranslate) {
        el.style.transform = `translateX(${this.randomizer(-15, 15)}rem)`
      }

      let elsText = this.$el.querySelectorAll('.text')
      for (const el of elsText) {
        for (const wrapper of el.children) {
          for (const child of wrapper.children) {
            let content = child.innerHTML
            child.style.transform = `translateX(${this.randomizer(-10, 10)}rem) rotate(${-1 * this.deg}deg)`
            child.innerHTML = `<span>${content}</span>`
          }
        }
      }
    })
  },

  beforeMount () {
    window.addEventListener('mousemove', this.handleMouseCoords)
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('wheel', this.handleWheel)
  },

  beforeDestroy () {
    window.removeEventListener('mousemove', this.handleMouseCoords)
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('wheel', this.handleWheel)
  },

  methods: {
    randomizer (min, max) {
      return Math.random() * (max - min) + min
    },

    map (value, domainMin, domainMax, rangeMin, rangeMax) {
      return ((value - domainMin) / (domainMax - domainMin)) * (rangeMax - rangeMin) + rangeMin
    },

    handleMouseCoords (e) {
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

      let mWrappers = this.$el.querySelectorAll('.m-wrapper')
      for (const wrapper of mWrappers) {
        if (wrapper.classList.contains('m-wrapper-01')) {
          wrapper.style.transform = `translate(${(docHalf[0] - x) * 0.075}px, ${(docHalf[1] - y) * 0.075}px)`
        } else if (wrapper.classList.contains('m-wrapper-02')) {
          wrapper.style.transform = `translate(${(docHalf[0] - x) * 0.05}px, ${(docHalf[1] - y) * 0.05}px)`
        } else if (wrapper.classList.contains('m-wrapper-03')) {
          wrapper.style.transform = `translate(${(docHalf[0] - x) * 0.025}px, ${(docHalf[1] - y) * 0.025}px)`
        }
      }

      // return [x, y]
      // console.log(x, y)
      // this.setStoreMouseCoords([x, y])
    },

    handleResize (e) {
      this.docWidth()
      this.docHeight()
    },

    handleWheel (e) {
      console.log(e)
    },

    docWidth () {
      // console.log(document.documentElement.clientWidth)
      return document.documentElement.clientWidth
    },

    docHeight () {
      // console.log(document.documentElement.clientHeight)
      return document.documentElement.clientHeight
    },

    // Vuex Stuff (Store)
    setStoreMouseCoords (coords) {
      this.$store.commit('newMouseCoords', coords)
    }
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:400,400i,900,900i|Playfair+Display:400,700|PT+Serif:400,400i,700,700i');

/**
* GLOBAL
*/
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  // font-family: "Inter UI", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  // font-family: 'Zilla Slab', serif;
  font-family: 'PT Serif', serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: hotpink;
}

body {
  font-size: 1.25rem;
  line-height: 1.6;
}

img {
  width: 100%;
}

.font-title {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 900;
}

.font-meta {
  font-family: 'Playfair Display', serif;
  // font-weight: 700;
}

p {
  margin-bottom: 1em;

  &::last-child {
    margin-bottom: 0;
  }
}

/**
* STYLES
*/
.rotate {
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1); // http://easings.net/de#easeOutExpo
}

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
  width: 100%;
  height: auto;
  min-height: 100vh;
  overflow: hidden;

  article {

    .content {
      width: 100% - 100/2;
      max-width: 700px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      // background: #fff;
      // margin-top: -25vh;
      // margin-bottom: -25vh;
      // padding: 35vh 0 25vh;

        header,
        .text {
          position: relative;
        }

        header {
          // width: 100%;
          // z-index: 1;

          .font-title {
            position: absolute;
            width: 0;
            font-size: 5em;
            line-height: 2;
          }
        }

        .text {
          mix-blend-mode: multiply;

          p {
            letter-spacing: .02em;
            span {
              // background: #fff;

              &::before {
                content: '';
                background: green;
                display: inline;
              }
            }
          }
        }

    }
  }
}
</style>
