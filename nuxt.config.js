module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'retro-future-hauptaufgabe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Project made at the University of Applied Sciences Potsdam; Course 21FVId-XD Retro-Future-Webdesign; WiSe 2017/18' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Vue Plugins
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/vue-parallax-js',
    { src: '~/plugins/vue-parallax-js', ssr: false },
    // '~/plugins/rellax',
    // '~/plugins/vue-resize'
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'axios',
      'vue-parallax-js'
      // 'rellax'
      // '~/node_modules/rellax/rellax.js'
    ],

    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
