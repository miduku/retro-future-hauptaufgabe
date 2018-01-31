<template>
  <section class="container">
    <article>
      <div class="content">
        <header class="header">
          <h1>Arbeitsraum: 404 Not Found</h1>
        </header>

        <img src="querlayout-3.png">
        <img class="logogif" src="titel-404.gif">
        <div class="divcontainer">
            <div class="blockcontainer">
                <p class="block" id="b1">
                    Gerade befinde ich mich in einem Auslandssemester in Amsterdam und eigentlich ist die FH;P gedanklich so weit entfernt, dass es mich gerade selbst verwundert, dass ich mich mit ihr beschäftige. Eigentlich liegt es auch nur daran, dass ich gerade nicht da bin. Wenn man mal das eigene Nest verlässt, dann ist es bekanntlich möglich viele Dinge klarer zu sehen. <strong>Mir bot es die Möglichkeit einmal kennenzulernen, dass es auch anders geht.</strong> Was mir hier an der Hogeschool van Amsterdam in der vergangenen Zeit vor allem aufgefallen ist, ist enormer Raum.
                </p>
            </div>
            <div class="blockcontainer">
                <p class="block" id="b2">
                    Und ich meine das nicht nur, weil die Hochschule um ein Vielfaches größer ist, sondern mit Blick auf die <strong>Nutzung und Gestaltung des vorhandenen Raums</strong>. Wenn man sich hier in Amsterdam ein wenig umschaut, dann entdeckt man ein Café in der Bib, eine Kaffee-Bar im Foyer, die nicht nur guten Kaffee macht, sondern noch stylisch aussieht, und eine Menge an Arbeitsräumen.
                </p>
            </div>
            <div class="blockcontainer">
                <p class="block" id="b3">
                    Dabei meine ich nicht, wie bei uns, sterile Seminarräume mit minimalistisch anmutenden Stühlen, so bequem wie Gefängnispritschen, sondern frei zugängliche Räume für Still-, Einzel- und Gruppenarbeit. Mit guten Arbeitsplätzen, gemütlichen Sitzckn und vielleicht auch mal einem nutzbaren Bildschirm, sodass bei Gruppenarbeiten nicht alle auf einen kleinen Laptopbildschirm starren müssen.
                </p>
            </div>
            <div class="blockcontainer">
                <p class="block" id="b4">
                    <strong>Und wenn mir jetzt jemand zurufen würde, dass es das doch alles an unserer FH geben würde, so müsste ich dies leider nachdrücklich verneinen.</strong> Von welchen Räumen diese Person auch zu sprechen mag, es kann nicht unsere Bibliothek sein, die in guter deutscher Tradition natürlich kein Café beinhaltet – schließlich kommt man ja zum Arbeiten und nicht zum Vergnügen. Arbeit heißt hier natürlich, wie es sich so gehört, Stillarbeit. Sich dort mit einer Gruppe zum Arbeiten zu treffen kommt erst gar nicht in Frage. Die Einrichtung und das Raumkonzept sind dafür nicht ausgelegt.
                </p>
            </div>
            <div class="blockcontainer">
            </div>
            <div class="blockcontainer">
                <p class="block bigcaption" id="b5">
                    Und dann gäbe es da ja auch noch die Mensa und die Cafeteria. Und wie man schon aus den Namen ableiten kann, sind beide nicht fürs Arbeiten geschaffen.
                </p>
            </div>
            <div class="blockcontainer">
                <p class="block" id="b6">
                    Und selbst an ein Mittagessen in angenehmer Atmosphäre ist nicht zu denken. Es musste eben funktional sein – es ist halt eine Mensa. Und dennoch wird die Mensa zum Arbeiten genutzt, denn sie ist der einzige Raum, der zentral und immer zugänglich ist. Dies ist nun jedoch zum Problem geworden, da man nun deutlich mehr Menschen durch den Umzug der FES in die Kiepenheuerallee täglich mit Essen versorgen muss.
                </p>
                <p class="block" id="b7">
                    Da der knapp vorhandene Platz nun dringend benötigt wird gibt es jetzt Essen im Stechuhrentakt. Arbeiten will man in solch einer Atmosphäre außerdem eigentlich auch nicht. Ganz abgesehen von zurückgelassenem Geschirr oder Essensresten auf den Tischen und einem latenten Mangel an Steckdosen.
                </p>
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

  layout: 'article',

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
    .logogif {
        position: absolute;
        top: 20px;
        right: 30px;
        display: block;
        width: 30%;
    }
    .divcontainer {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
    }
    .blockcontainer {
        position: relative;
        height: 60%;
    }
    .block {
        position: absolute;
        font-family: 'PT Serif', serif;
        color: #fff;
    }
    .bigcaption {
        font-family: Barlow, sans-serif;
    }
    #b1 {
        left: 20%;
        top: 40%;
        width: 450px;
        line-height: 1.7;
    }
    #b2 {
        width: 270px;
        bottom: 3%;
        left: 45%;
        color: #000;
        line-height: 0.85;
    }
    #b3 {
        width: 400px;
        transform: rotate(270deg);
        right: 13%;
        bottom: 20%;
    }
    #b4 {
        width: 350px;
        left: 32%;
        top: 50%;
        color: #000;
    }
    #b5 {
        left: 16%;
        top: 40%;
        width: 200px;
        font-size: 35px;
    }
    #b6 {
        left: 16%;
        top: 50%;
        width: 350px;
        line-height: 1.6;
    }
    #b7 {
        left: 16%;
        top: 50%;
        width: 350px;
        padding-left: 400px;
        line-height: 1.6;
    }
</style>
