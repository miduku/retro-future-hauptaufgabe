<template>
  <section class="container">
    <article>
      <div class="content">
        <header class="header">
          <!-- <h1>Arbeitsraum: 404 Not Found</h1> -->
        </header>

        <div class="divcontainer text">
            <div class="bild-container">
                <img class="logogif" src="img/titel-404.gif">
            </div>
            <div class="text--container">
                <div id="b1">
                    <p class="block rellax">
                        Gerade befinde ich mich in einem Auslandssemester in Amsterdam und eigentlich ist die FH;P gedanklich so weit entfernt, dass es mich gerade selbst verwundert, dass ich mich mit ihr beschäftige. Eigentlich liegt es auch nur daran, dass ich gerade nicht da bin. Wenn man mal das eigene Nest verlässt, dann ist es bekanntlich möglich viele Dinge klarer zu sehen. <strong>Mir bot es die Möglichkeit einmal kennenzulernen, dass es auch anders geht.</strong> Was mir hier an der Hogeschool van Amsterdam in der vergangenen Zeit vor allem aufgefallen ist, ist enormer Raum.
                    </p>
                </div>
            </div>
            <div class="text--container">
                <div id="b2">
                    <p class="block rellax" data-rellax-speed="3">
                        Und ich meine das nicht nur, weil die Hochschule um ein Vielfaches größer ist, sondern mit Blick auf die <strong>Nutzung und Gestaltung des vorhandenen Raums</strong>. Wenn man sich hier in Amsterdam ein wenig umschaut, dann entdeckt man ein Café in der Bib, eine Kaffee-Bar im Foyer, die nicht nur guten Kaffee macht, sondern noch stylisch aussieht, und eine Menge an Arbeitsräumen.
                    </p>
                </div>
            </div>
            <div class="text--container">
                <div id="b3">
                    <p class="block rellax">
                        Dabei meine ich nicht, wie bei uns, sterile Seminarräume mit minimalistisch anmutenden Stühlen, so bequem wie Gefängnispritschen, sondern frei zugängliche Räume für Still-, Einzel- und Gruppenarbeit. Mit guten Arbeitsplätzen, gemütlichen Sitzckn und vielleicht auch mal einem nutzbaren Bildschirm, sodass bei Gruppenarbeiten nicht alle auf einen kleinen Laptopbildschirm starren müssen.
                    </p>
                </div>
            </div>
            <div class="text--container">
                <div id="b4">
                    <div class="bloccont rellax">
                        <p class="block">
                            <strong>Und wenn mir jetzt jemand zurufen würde, dass es das doch alles an unserer FH geben würde, so müsste ich dies leider nachdrücklich verneinen.</strong> Von welchen Räumen diese Person auch zu sprechen mag, es kann nicht unsere Bibliothek sein, die in guter deutscher Tradition natürlich kein Café beinhaltet – schließlich kommt man ja zum Arbeiten und nicht zum Vergnügen. Arbeit heißt hier natürlich, wie es sich so gehört, Stillarbeit. Sich dort mit einer Gruppe zum Arbeiten zu treffen kommt erst gar nicht in Frage. Die Einrichtung und das Raumkonzept sind dafür nicht ausgelegt.
                        </p>
                    </div>
                </div>
            </div>
            <div class="text--container">
            </div>
            <div class="text--container">
                <div id="b5">
                    <p class="block bigcaption rellax" data-rellax-speed="3">
                        Und dann gäbe es da ja auch noch die Mensa und die Cafeteria. Und wie man schon aus den Namen ableiten kann, sind beide <strong><a href="/ed/index.html">nicht fürs Arbeiten geschaffen</a>.</strong>
                    </p>
                </div>
            </div>
            <div class="text--container">
                <div id="b6">
                    <p class="block rellax">
                        Und selbst an ein Mittagessen in angenehmer Atmosphäre ist nicht zu denken. Es musste eben funktional sein – es ist halt eine Mensa. Und dennoch wird die Mensa zum Arbeiten genutzt, denn sie ist der einzige Raum, der zentral und immer zugänglich ist. Dies ist nun jedoch zum Problem geworden, da man nun deutlich mehr Menschen durch den Umzug der FES in die Kiepenheuerallee täglich mit Essen versorgen muss.
                    </p>
                </div>
                <div id="b7">
                    <p class="block rellax">
                        Da der knapp vorhandene Platz nun dringend benötigt wird gibt es jetzt Essen im Stechuhrentakt. Arbeiten will man in solch einer Atmosphäre außerdem eigentlich auch nicht. Ganz abgesehen von zurückgelassenem Geschirr oder Essensresten auf den Tischen und einem latenten Mangel an Steckdosen.
                    </p>
                </div>
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

  layout: 'article2',

  mounted () {
    this.$nextTick(() => {
      // this.randomizer(0, 10)
    })
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
    #tp-article .container .content {
        width: 100%;
        max-width: none;
        padding: 0;
    }
    a {
      color: #fff;
    }
    .container > article {
        background-color: #000;
        background-image: url('/img/querlayout-3.png');
        background-repeat: no-repeat;
        background-size: contain;
        height: 370.950rem;
    }
    .logogif {
        transform: translate(110%,10%);
        width: 30%;
    }
    .divcontainer {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .bild-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 23vh;
        width: 100%;
    }
    .text--container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
        width: 100%;
    }
    .block {
        font-family: 'PT Serif', serif;
        color: #fff;
    }
    #tp-article .container .content .text .bigcaption {
        font-family: Barlow, sans-serif;
        font-size: 2rem;
        line-height: 1.3;
    }
    #b1 {
        transform: translate(-60%,-20%);
        width: 30%;
        line-height: 1.7;
    }
    #b2 {
        width: 19%;
        transform: translate(20%,200%);
        color: #000;
        line-height: 1;
    }
    #b3 {
        width: 22%;
        transform: rotate(270deg) translate(20%,110%);
        line-height: 1.4;
    }
    #b4 {
        width: 19%;
        transform: rotate(90deg) translate(30%,-10%);
    }
    #b4 > .bloccont > p {
        color: #000;
        transform: rotate(-90deg);
    }
    #b5 {
        transform: translate(-170%,80%);
        width: 15%;
        mix-blend-mode: difference;
    }
    #b6 {
        transform: translate(-35%,-240%);
        width: 25%;
        line-height: 1.6;
        mix-blend-mode: difference;
    }
    #b7 {
        transform: translate(-30%,-385%);
        width: 25%;
        line-height: 1.6;
        mix-blend-mode: difference;
    }
</style>
