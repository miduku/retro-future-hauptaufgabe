<template>
  <div class="logo-container" :class="'mode-' + layout">
    <div :class="'logo-' + $route.name" data-selector=".m-wrapper">
      <div class="logo m-wrapper m-wrapper-01" data-depth="0.3">
        <div class="logo-translate">
          <nuxt-link to="/" exact><img class="row main" src="/img/logo/svg-parts/Element 109.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row main" src="/img/logo/svg-parts/Element 110.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row main" src="/img/logo/svg-parts/Element 111.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row main" src="/img/logo/svg-parts/Element 112.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row main" src="/img/logo/svg-parts/Element 113.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row main" src="/img/logo/svg-parts/Element 114.svg"></nuxt-link>

          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 115.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 116.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 117.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 118.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 119.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 120.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 121.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 122.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 123.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 124.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 125.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 126.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 127.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 128.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 129.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 130.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 131.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 132.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 133.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 134.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 135.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 136.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 137.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 138.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 139.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 140.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 141.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 142.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 143.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 144.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 145.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 146.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 147.svg"></nuxt-link>
          <nuxt-link to="/" exact><img class="row" src="/img/logo/svg-parts/Element 148.svg"></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from '~/mixins/mixins'

export default {
  mixins: [mixins],

  props: ['layout'],

  mounted () {
    this.$nextTick(() => {
      if (this.layout !== undefined) {
        this.translateLogo()
        this.scatterLogo()
      }
    })
  },

  methods: {
    translateLogo () {
      const logoTranslate = this.$el.querySelector('.logo-translate')

      logoTranslate.style.transform = `translate(${this.randomizer(-15, 15) + 'em'})`
    },

    scatterLogo () {
      const rows = this.$el.querySelectorAll('.logo .row')

      for (const row of rows) {
        const x = this.randomizer(-15, 10) + 'em'
        const y = this.randomizer(-15, 10) + 'em'

        row.style.transform = `translate(${x} ,${y})`
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../assets/css/_vars';
@import '../assets/css/_mixins';

.logo-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: visible;
  transition: $transition;

  &.mode-article {
    position: absolute;
    z-index: 1;
    height: ((100/3) + vh);
  }

  .logo {
    position: relative;
    line-height: 0;

    .logo-translate {
      width: 14.750em;
      height: 7em;

      &:focus,
      &:hover {
        .row {
          transform: translate(0, 0) !important;
        }
      }
    }

    a {
      pointer-events: all;
    }

    .row {
      width: auto;
      margin: 0;
      height: 19.65%;
      transition: $transition;

      &.main {
        height: 40%;
      }
    }
  }
}
</style>

