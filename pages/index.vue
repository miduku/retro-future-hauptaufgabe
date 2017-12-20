<template>
  <section class="container">

      <div class="m-wrapper m-wrapper-01">
        <div class="content">
          <article v-for="(article, i) in articles" :key="i">
            <!-- IMAGE -->
            <div class="background">
              <div class="m-wrapper m-wrapper-04">
                <img :src="article.image" alt="">
              </div>
            </div>

            <!-- HEADER -->
            <header class="translate">
              <div class="m-wrapper m-wrapper-02">
                <h1 class="font-title">
                  <span class="rellax">{{ article.title }}</span>
                </h1>
              </div>
            </header>

            <!-- TEXT -->
            <div class="text">
              <div class="m-wrapper m-wrapper-03">
                <p>
                  <span v-html="article.intro">
                  </span>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

  </section>
</template>

<script>
export default {
  layout: 'default',
  // transition: 'out-in',
  data () {
    return {
      articles: [
        {
          title: `Bringt uns unsere Tassen zurück!`,
          intro: `Jede*r kennt es, wir holen uns morgens um 8 Uhr einen Kaffee, Tee oder Kakao in der Cafeteria. In der nächsten Pause gehen wir ins Casino und holen uns die nächste Ration unseres favorisierten Heißgetränks. Am Nachmittag kommen wir zurück und holen uns unsere nächste Ladung…`,
          image: `/img/tassen-zurueck.jpg`
        },
        {
          title: `nextbike 2016 – FH;P-Studierende sind unterwegs`,
          intro: `Laut einer Umfrage des AStA im SoSe 2017 haben 62,9% der Teilnehmenden schon einmal etwas von nextbike gehört, 10,8% haben schon einmal ein Fahrrad ausgeliehen und 16,2% nutzen es sogar regelmäßig.`,
          image: `/img/nextbike-auswertung.png`
        },
        {
          title: `Bringt uns unsere Tassen zurück!`,
          intro: `Jede*r kennt es, wir holen uns morgens um 8 Uhr einen Kaffee, Tee oder Kakao in der Cafeteria. In der nächsten Pause gehen wir ins Casino und holen uns die nächste Ration unseres favorisierten Heißgetränks. Am Nachmittag kommen wir zurück und holen uns unsere nächste Ladung…`,
          image: `/img/tassen-zurueck.jpg`
        },
        {
          title: `nextbike 2016 – FH;P-Studierende sind unterwegs`,
          intro: `Laut einer Umfrage des AStA im SoSe 2017 haben 62,9% der Teilnehmenden schon einmal etwas von nextbike gehört, 10,8% haben schon einmal ein Fahrrad ausgeliehen und 16,2% nutzen es sogar regelmäßig.`,
          image: `/img/nextbike-auswertung.png`
        }
      ]
    }
  }
}
</script>
