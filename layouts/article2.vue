<template>
  <transition name="layout" mode="out-in">
    <div class="root">
      <div id="tp-article">
        <Logo layout="article2"/>

        <nuxt/>
      </div>
    </div>
  </transition>
</template>

<script>
import mixins from '~/mixins/mixins'
import mixinsParallax from '~/mixins/mixinsParallax'

import Logo from '~/components/Logo'

export default {
  mixins: [mixins, mixinsParallax],

  components: {
    Logo
  },

  data () {
    return {
    }
  },

  mounted () {
    // DOM ready
    this.$nextTick(() => {
      // init
      this.setParallax('.logo-' + this.$route.name)
      this.setParallax('.' + this.$route.name)
      // this.setParagrafsTopFixed()
      this.setHeaderTopFixed()
      // this.setParagrafsXTransform()
      this.homeIfScrolledBottom()
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
      // this.setParagrafsTopFixed()
      this.setHeaderTopFixed()
    },

    homeIfScrolledBottom () {
      const el = this.$el.querySelector('.text')
      const $this = this

      const options = {
        root: null,
        rootMargin: '0px',
        threshold: [0, 1]
      }

      const observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(el)

      function handleIntersect (entries, observer) {
        entries.forEach(entry => {
          // console.log(entry)
          if (entry.isIntersecting === false) {
            $this.$nuxt.$router.replace({ path: '/' })
          }
        })
      }

      // const docHeight = this.docHeight()

      // console.log(el.scrollHeight - el.scrollTop, docHeight)
      // // console.log(el)
      // if (el.scrollHeight - el.scrollTop === docHeight) {
      //   // console.log('bloop')
      //   this.$nuxt.$router.replace({ path: '/' })
      // }
    },

    setHeaderTopFixed () {
      const elHeader = this.$el.querySelector('.header')
      const elHeaderTitle = this.$el.querySelector('.font-title')
      const clientHeightQuarter = this.docHeight() / 4
      const headerBounding = elHeader.getBoundingClientRect()

      if (headerBounding !== null && elHeader.length > 0) {
        if (headerBounding.top >= 0) {
          if (headerBounding.top < clientHeightQuarter) {
            let lineHeight = this.map(headerBounding.top, clientHeightQuarter, 0, 2, 0.5)

            elHeaderTitle.style.lineHeight = lineHeight
          } else {
            elHeaderTitle.style.lineHeight = 2
          }
        }
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
    }

    // setParagrafsXTransform () {
    //   const elsTranslate = this.$el.querySelectorAll('.translate')
    //   for (const el of elsTranslate) {
    //     el.style.transform = `translateX(${this.randomizer(-15, 15)}em)`
    //   }

    //   const elsText = this.$el.querySelectorAll('.text')
    //   for (const el of elsText) {
    //     for (const p of el.children) {
    //       p.style.transform = `translateX(${this.randomizer(-10, 10)}em)`
    //     }
    //   }
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

  .container {
    .article-container {
      z-index: 1;
    }
      .content {
        width: 100% - 100/2;
        max-width: $tablet;
        padding-top: ((100/3) + vh);

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
            // mix-blend-mode: multiply;
            min-height: 100vh;
            // margin: 0 0 ((100/3) + vh);
            // padding: 0 0 (((100/3)*2) + vh);
            // margin: 0 0 101vh;
            position: relative;
            pointer-events: all;

            .text--container {
              // position: sticky;
              // top: 0;
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
