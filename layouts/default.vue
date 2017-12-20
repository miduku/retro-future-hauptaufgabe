<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  mounted () {
    // DOM ready
    this.$nextTick(() => {
      // init
      this.setParagrafsTransform()
    })
  },

  beforeMount () {
    window.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('resize', this.handleResize)
    // window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy () {
    window.removeEventListener('mousemove', this.handleMouseMove)
    window.removeEventListener('resize', this.handleResize)
    // window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    randomizer (min, max) {
      return Math.random() * (max - min) + min
    },

    handleResize (e) {
      // console.log(e)
      // this.docHeight()
      // let top = this.$el.querySelector('.text')
      // console.log(top.getBoundingClientRect().top)
    },

    handleScroll (e) {
      // console.log(e)
      // this.docHeight()
      // let top = this.$el.querySelector('.text')
      // console.log(top.getBoundingClientRect().top)
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
        } else if (wrapper.classList.contains('m-wrapper-04')) {
          wrapper.style.transform = `translate(${(docHalf[0] - x) * 0.025}px, ${(docHalf[1] - y) * 0.01}px)`
        }
      }
    },

    setParagrafsTransform () {
      const articles = this.$el.querySelectorAll('article')
      // console.log(elsText)

      for (const article of articles) {
        article.style.transform = `translateX(${this.randomizer(-7, 7)}em)`
      }
    },

    docWidth () {
      // console.log(document.documentElement.clientWidth)
      return document.documentElement.clientWidth
    },

    docHeight () {
      // console.log(document.documentElement.clientHeight)
      return document.documentElement.clientHeight
    }

  }
}
</script>

<style lang="scss">
@import '../assets/css/_vars';
@import '../assets/css/_mixins';

.container {
  .content {
    position: relative;
    // width: 75%;
    max-width: $tablet;
    display: flex;
    flex-wrap: wrap;
    // flex-direction: column;
    justify-content: center;

    article {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      margin: .5rem;
      width: 75%;
    }

      .background {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        > * {
          width: 25%;
          max-width: 200px;
        }
      }

      header {
        // position: absolute;
        padding: 4rem 0;
        z-index: 2;
        text-align: center;
        mix-blend-mode: multiply;

        .font-title {
          // font-size: 2.75rem;
          font-size: 2em;
          transform: scale(1.5);
          line-height: 1;

          @include widescreen {
            font-size: 2rem;
          }

          span {
            // background: #fff;
            // line-height: .75;
            display: inline;
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

        p {
          font-size: .8em;

          @include widescreen {
            font-size: 1rem;
          }


          span {
            // background: #000;
          }
        }
      }
  }
}
</style>
