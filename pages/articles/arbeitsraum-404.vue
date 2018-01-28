<template>
  <section class="container">
    <article>
      <div class="content">
        <header>
          <h1>Arbeitsraum: 404 Not Found</h1>
        </header>

        <div class="text">
          <div class="text--container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid pariatur saepe culpa neque voluptatem velit quibusdam, odit autem eligendi? Reiciendis, sint ipsam nesciunt cupiditate distinctio quisquam praesentium eius? Quisquam.</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import mixins from '~/mixins/mixins'

export default {
  mixins: [mixins],

  mounted () {
    this.$nextTick(() => {
      // this.randomizer(0, 10)
    })
  },

  methods: {

  }
}
</script>


<style lang="scss">

</style>
