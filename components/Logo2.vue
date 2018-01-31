<template>
  <div class="logo-container" :class="'mode-' + layout">
    <div :class="'logo-' + $route.name" data-selector=".m-wrapper">
      <div class="logo m-wrapper m-wrapper-01" data-depth="0.3">
      </div>
    </div>
  </div>
</template>

<script>
import mixins from '~/mixins/mixins'

export default {
  mixins: [mixins],

  mounted () {
    this.$nextTick(() => {
    })
  },

  methods: {
  }
}
</script>


<style lang="scss" scoped>
@import '../assets/css/_vars';
@import '../assets/css/_mixins';

.logo-arbeitsraum-404 {
    position: absolute;
}
</style>

