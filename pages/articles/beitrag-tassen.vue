<template>
  <section
    class="container"
  >

    <div class="background">
      <img class="img img-glitch" :src="backgroundImage" alt="">

      <div class="svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"  preserveAspectRatio="none" style="height: 100%; width: 100%">
          <title>Background SVG</title>
          <polygon fill="#fff" :points="setSvgPoints()"/>
        </svg>
      </div>
    </div>

    <div
      :class="$route.name"
      data-selector=".m-wrapper"
      class="article-container"
    >
      <article>
        <div class="m-wrapper m-wrapper-01" data-depth="0.1">
          <div class="content">
            <!-- HEADER -->
            <header class="header translate">
              <div class="m-wrapper m-wrapper-02" data-depth="0.2">
                <h1 class="rellax font-title" data-rellax-speed="7">Bringt uns unsere Tassen zurück!</h1>
              </div>
            </header>

            <!-- TEXT -->
              <div class="text">
                <div v-for="(cntnt, i) in content"
                  :key="i"
                  v-html="cntnt"
                  class="text--container"
                >
                </div>

              </div>
          </div>
        </div>
      </article>
    </div>

  </section>
</template>

<script>
import mixins from '~/mixins/mixins'
import mixinsParallax from '~/mixins/mixinsParallax'

export default {
  mixins: [mixins, mixinsParallax],

  layout: 'article',

  data () {
    return {
      backgroundImage: '/img/tassen-zurueck.jpg',
      glitchParams: {
        amount: 35,
        iterations: 20,
        quality: 30,
        seed: 25
      },
      content: [
        `<p>Jede*r kennt es, wir holen uns morgens um 8 Uhr einen Kaffee, Tee oder Kakao in der Cafeteria. In der nächsten Pause gehen wir ins Casino und holen uns die nächste Ration unseres favorisierten Heißgetränks. Am Nachmittag kommen wir zurück und holen uns unsere nächste Ladung…</p>`,
        `<p>Die Becher nehmen wir mit. Aber was machen wir danach damit? <br>Wer hier jetzt guten Gewissens sagen kann: Ich gebe sie dort zurück, wo ich sie bekommen habe, du darfst dir einmal kräftig auf die Schulter klopfen. <br>Aber was passiert mit den anderen Tassen? <br><span class="bigger-6">Sie fehlen</span>.</p>`,
        `<p>Kommt man die letzten Tage ins Casino um dort etwas zu trinken, sieht man keinen hohen Tassen Stapel auf der Kaffeemaschine. <br>Stattdessen bekommen wir teilweise sogar wild zusammengewürfelte Krüge, die noch aus der Stube (R.I.P.) stammen. Vereinzelt konnten wir keine Heißgetränke rausgeben, denn es sind einfach keine Behältnisse da.</p>`,
        `<p>Aber wo sind denn nun die Tassen? <br>Machen wir eine kleine Reise über den Campus: <br>In regelmäßigen Abständen sieht man Casino-Mitglieder und Helfer*innen mit Bäckerkisten über den Campus streifen und entflohene Tassen einsammeln. Unsere <span class="bigger-4">Pötte landen in den Teeküchen der Fachhochschule</span>, fein säuberlich gespült werden sie in den Regalen einsortiert.</p>`,
        `<p>Man findet aber auch Tassenstapel in <span class="bigger-2">Studios, Toiletten oder Vorlesungsräumen</span>, oft mit eingetrockneten Kaffeeresten und als wahres Schimmelbiotop. Diese Gefäße zu säubern ist wirklich kein Vergnügen. Sie einzusammeln, nebenbei bemerkt, auch nicht. <br>Andere Becher finden sich in Fluren wieder. Sie sind achtlos auf irgendwelchen Tischen, Schränken oder einfach in einer Ecke abgestellt. Der Zustand der Tassen unterscheidet sich meist nicht vom zuletzt Erwähnten. Auch werden unsere Tassen gerne als Aschenbecher oder zum Farbe mischen verwendet. Mein persönliches Highlight war eine Tasse als <span class="bigger-3">Türstopper</span>.</paN>`,
        `<p>Eine nicht zu benennende Dunkelziffer an Bechern landet auch in privaten Haushalten. Sie haben es dort schön warm und trocken und werden regelmäßig gefüttert, aber sie sind Rudeltiere. Sie vermissen ihr Zuhause und die liebevolle Wärme, die sie auf ihrem Platz auf der Kaffeemaschine umschließt.</p>`,
        `<p>Wenn die Ausreißer nun gefasst worden sind, werden sie mit ihren Brüdern und Schwestern zusammen in besagter Bäckerkiste in ihre Heimat befördert. Dort werden sie begutachtet, nicht zu rettende Tassen werden ausgiebig betrauert und angemessen bestattet. Die Überlebenden werden intensiv behandelt; gewaschen und geschrubbt bis sie blitzblank sind und die verantwortliche Tresenschicht mit Schimmel bespritzt ist.</p>`,
        `<p>Leider werden immer weniger Tassen lebend aufgefunden.</p>`,
        `<p>Wir brauchen also eure Hilfe.</p>`,
        `<p>Bringt uns unsere Tassen zurück, sie fehlen hier.</p>`,
        `<p>Für unsere verlorenen Freund*innen werden wir von Dienstag 28.11. bis Mittwoch 29.11. eine <span class="bigger-5">Trauerphase einlegen</span>. Es wird in dieser Zeit keine warmen Getränke im Casino geben.</p>`,
        `<p>Bitte ermöglicht unseren Tassen an dieser Trauerfeier teilzunehmen und bringt sie uns zurück.</p>`
      ]
    }
  },

  mounted () {
    // DOM ready
    this.$nextTick(() => {
      // init
    })
  },

  methods: {
    setSvgPoints () {
      // 0 0 100 0 100 100 0 100
      const points = {
        tl: { x: this.randomizer(0, 15), y: this.randomizer(0, 15) },
        tr: { x: this.randomizer(85, 100), y: this.randomizer(0, 15) },
        br: { x: this.randomizer(85, 100), y: this.randomizer(85, 100) },
        bl: { x: this.randomizer(0, 15), y: this.randomizer(85, 100) }
      }

      return `${points.tl.x} ${points.tl.y} ${points.tr.x} ${points.tr.y} ${points.br.x} ${points.br.y} ${points.bl.x} ${points.bl.y}`
    }
  }
}
</script>

<style lang="scss">
.text--container {
  $bigger: .6em;

  .bigger-3 {
    font-size: $bigger * 3;
    font-weight: bold;
  }

  .bigger-4 {
    font-size: $bigger * 4;
    font-weight: bold;
  }

  .bigger-5 {
    font-size: $bigger * 5;
    font-weight: bold;
  }

  .bigger-6 {
    font-size: $bigger * 6;
    font-weight: bold;
  }
}

</style>
