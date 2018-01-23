<template>
  <nuxt id="tp-default"/>
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
      this.setParagrafsXTransform()
    })
  },

  beforeMount () {
    // window.addEventListener('mousemove', this.handleMouseMove)
    // window.addEventListener('resize', this.handleResize)
    // window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy () {
    // window.removeEventListener('mousemove', this.handleMouseMove)
    // window.removeEventListener('resize', this.handleResize)
    // window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    // randomizer (min, max) {
    //   return Math.random() * (max - min) + min
    // },

    handleResize (e) {
      // console.log(e)
      // this.docHeight()
      // let top = this.$el.querySelector('.text')
      // console.log(top.getBoundingClientRect().top)
    },

    setParagrafsXTransform () {
      const articles = this.$el.querySelectorAll('article')
      // console.log(elsText)

      for (const article of articles) {
        article.style.transform = `translate(${this.randomizer(-20, 20)}vw, ${this.randomizer(-5, 5)}vh)`
      }
    }

    // docWidth () {
    //   // console.log(document.documentElement.clientWidth)
    //   return document.documentElement.clientWidth
    // },

    // docHeight () {
    //   // console.log(document.documentElement.clientHeight)
    //   return document.documentElement.clientHeight
    // }

  }
}
</script>

<style lang="scss">
@import '../assets/css/_vars';
@import '../assets/css/_mixins';

#tp-default {
  &.container {
    .content {
      position: relative;
      // width: 75%;
      max-width: $tablet;
      display: flex;
      flex-wrap: wrap;
      // flex-direction: column;
      justify-content: center;

      article {
        display: block;
        width: 100%;

        > a {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
          margin: 2.25em auto;
          width: 75%;
          pointer-events: all;

          > .m-wrapper {
            position: absolute;
          }

          .font-title {
            span {
              background: #fff;
              transition: $transition;
            }
          }

          .text {
            line-height: .25;
            transform: translateY(-1.125em);

            p {
              background-color: transparent;
              background-image: linear-gradient(transparent .5em, $black 0, $black 1em, transparent 0);
              transition: $transition;
            }
          }

          @include widescreen {
            // margin: 2rem auto;
          }

          &:focus,
          &:hover {
            .font-title {
              span {
                background: transparent;
              }
            }

            .text {
              line-height: inherit;
              transform: translateY(0);

              p {
                background-color: #fff;
                background-image: none;
              }
            }
          }
        }
      }

        .background {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          left: 0;
          top: 0;

          > * {
            width: 70%;
            margin: 0 auto;
            display: block;
            // max-width: 200px;
          }
        }

        header {
          // position: absolute;
          margin: 6em 0;
          z-index: 2;
          text-align: center;
          width: 100%;
          // mix-blend-mode: multiply;

          @include desktop {
            margin: 5em 0;
          }

          .m-wrapper {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }

          .font-title {
            font-size: 1.8rem;
            // transform: scale(1.5);
            line-height: 1;
            // align-self: center;

            @include widescreen {
              font-size: 2.75rem;
              // font-size: 1.8rem;
            }

            span {
              // line-height: .75;
              display: inline;
            }
          }

          .meta {
            // background: green;

            .author {
              position: absolute;
              left: -2em;
              bottom: 2em;
              transform: rotateZ(180deg);
              background: #fff;
              display: inline-block;

              @include widescreen {
                // font-size: 1.2rem;
              }
            }
          }
        }

        .text {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          z-index: 3;
          line-height: 1.25;
          left: 0;
          top: 0;

          .p-wrapper {
            display: inline-block;
          }

          p {
            font-size: .8em;
            display: inline;

            @include widescreen {
              // font-size: 1rem;
            }

            // &::after {
            //   content: '';
            //   // border-bottom: .5em solid #000;
            //   background: $black;
            //   // position: absolute;
            //   bottom: .25em;
            //   top: 0;
            //   left: 0;
            // }
          }
        }
    }
  }
}
</style>
