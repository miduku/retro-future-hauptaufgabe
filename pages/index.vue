<template>
  <section class="container">
    <article>
      <div class="content">

        <!-- BGR -->
        <div class="background">
          <img src="http://semikolon-fhp.de/wp-content/uploads/2017/11/tassen-zurueck.jpg" alt="">
        </div>

        <!-- HEADER -->
        <header>
          <!-- <h1 v-parallax="0.2">Bringt uns unsere Tassen zurück!</h1> -->
          <h1 class="rellax">Bringt uns unsere Tassen zurück!</h1>
        </header>

        <!-- TEXT -->
        <div class="text">
          <p>Jede*r kennt es, wir holen uns morgens um 8 Uhr einen Kaffee, Tee oder Kakao in der Cafeteria. In der nächsten Pause gehen wir ins Casino und holen uns die nächste Ration unseres favorisierten Heißgetränks. Am Nachmittag kommen wir zurück und holen uns unsere nächste Ladung…</p>
          <p>Die Becher nehmen wir mit. Aber was machen wir danach damit?
            <br>Wer hier jetzt guten Gewissens sagen kann: Ich gebe sie dort zurück, wo ich sie bekommen habe, du darfst dir einmal kräftig auf die Schulter klopfen.
            <br>Aber was passiert mit den anderen Tassen?
            <br>Sie fehlen.</p>
          <p>Kommt man die letzten Tage ins Casino um dort etwas zu trinken, sieht man keinen hohen Tassen Stapel auf der Kaffeemaschine.
            <br>Stattdessen bekommen wir teilweise sogar wild zusammengewürfelte Krüge, die noch aus der Stube (R.I.P.) stammen. Vereinzelt konnten wir keine Heißgetränke rausgeben, denn es sind einfach keine Behältnisse da.</p>
          <p>Aber wo sind denn nun die Tassen?
            <br>Machen wir eine kleine Reise über den Campus:
            <br>In regelmäßigen Abständen sieht man Casino-Mitglieder und Helfer*innen mit Bäckerkisten über den Campus streifen und entflohene Tassen einsammeln. Unsere Pötte landen in den Teeküchen der Fachhochschule, fein säuberlich gespült werden sie in den Regalen einsortiert.</p>
          <p>Man findet aber auch Tassenstapel in Studios, Toiletten oder Vorlesungsräumen, oft mit eingetrockneten Kaffeeresten und als wahres Schimmelbiotop. Diese Gefäße zu säubern ist wirklich kein Vergnügen. Sie einzusammeln, nebenbei bemerkt, auch nicht.
            <br>Andere Becher finden sich in Fluren wieder. Sie sind achtlos auf irgendwelchen Tischen, Schränken oder einfach in einer Ecke abgestellt. Der Zustand der Tassen unterscheidet sich meist nicht vom zuletzt Erwähnten. Auch werden unsere Tassen gerne als Aschenbecher oder zum Farbe mischen verwendet. Mein persönliches Highlight war eine Tasse als Türstopper.</p>
          <p>Eine nicht zu benennende Dunkelziffer an Bechern landet auch in privaten Haushalten. Sie haben es dort schön warm und trocken und werden regelmäßig gefüttert, aber sie sind Rudeltiere. Sie vermissen ihr Zuhause und die liebevolle Wärme, die sie auf ihrem Platz auf der Kaffeemaschine umschließt.</p>
          <p>Wenn die Ausreißer nun gefasst worden sind, werden sie mit ihren Brüdern und Schwestern zusammen in besagter Bäckerkiste in ihre Heimat befördert. Dort werden sie begutachtet, nicht zu rettende Tassen werden ausgiebig betrauert und angemessen bestattet. Die Überlebenden werden intensiv behandelt; gewaschen und geschrubbt bis sie blitzblank sind und die verantwortliche Tresenschicht mit Schimmel bespritzt ist.</p>
        </div>

      </div>
    </article>
  </section>
</template>

<script>
export default {
  data () {
    return {
      test: Number
    }
  },

  mounted () {
    this.$nextTick(() => {
      // init
      this.test = this.randomizer(0, 3)
    })
  },

  methods: {
    randomizer (min, max) {
      return Math.random() * (max - min) + min
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
