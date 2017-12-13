<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
html {
  font-family: "Inter UI", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #111;
  color: #fff;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

img {
  width: 100%;
}

//
.container {
  width: 100%;
  height: auto;
  min-height: 100vh;

  article {


    .content {
      width: 100% - 100/3;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
