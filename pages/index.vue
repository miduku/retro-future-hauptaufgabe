<template>
  <section
    class="container"
  >

    <div class="rootColumns">
      <a href="#" class="rootColumn is-left">
        uqf
      </a>

      <div class="rootColumn is-center">
        <div
          :class="$route.name"
          data-selector=".m-wrapper"
        >
          <div class="m-wrapper" data-depth="0.2">
            <div class="content">

              <article
                v-for="(article, i) in articles"
                :key="i"
              >
                <nuxt-link :to="article.link" exact>
                  <!-- IMAGE -->
                  <div class="m-wrapper" data-depth="0.3">
                    <div class="background">
                      <img
                        :src="article.image"
                      >
                    </div>
                  </div>

                  <!-- HEADER -->
                  <header>
                    <div class="meta">
                      <span class="author">{{ article.meta.author }}</span>
                    </div>
                    <div class="m-wrapper" data-depth="0.4">
                      <h1 class="font-title">
                        <span>{{ article.title }}</span>
                      </h1>
                    </div>
                  </header>

                  <!-- TEXT -->
                  <div class="m-wrapper" data-depth="0.5">
                    <div class="text">
                      <div class="p-wrapper">
                        <p v-html="article.intro">
                        </p>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </article>

            </div>
          </div>
        </div>
      </div>

      <a href="#" class="rootColumn is-right">
        uqf
      </a>
    </div>

  </section>
</template>

<script>
import mixins from '~/mixins/mixins'
import mixinsParallax from '~/mixins/mixinsParallax'

export default {
  mixins: [mixins, mixinsParallax],

  // async asyncData ({ app }) {
  //   return {
  //     hmm: app
  //   }
  // },

  // layout: 'default',
  data () {
    return {
      articles: [
        {
          title: `Die Goldenen Zwanziger`,
          intro: `Unter dem Motto „die Goldenen Zwanziger“ möchte die Hochschule am 19. Januar ihre 25 Jahre mit einem Ball feiern. Zum ersten Mal sind in diesem Semester alle Fachbereiche auf einem Campus`,
          image: `/img/Hochschulball-Cover-c-2.png`,
          link: `/articles/beitrag-tassen`,
          meta: {
            author: `Nikolas Ripka`,
            pubDate: `20171219`
          }
        },
        {
          title: `Arbeitsraum: 404 Not Found`,
          intro: `Gerade befinde ich mich in einem Auslandssemester in Amsterdam und eigentlich ist die FH;P gedanklich so weit entfernt, dass es mich gerade selbst verwundert, dass ich mich mit ihr beschäftige.`,
          image: `/img/tassen-zurueck.jpg`,
          link: `/articles/arbeitsraum-404`,
          meta: {
            author: `blablabla`,
            pubDate: `20171127`
          }
        },
        {
          title: `nextbike 2016 – FH;P-Studierende sind unterwegs`,
          intro: `Laut einer Umfrage des AStA im SoSe 2017 haben 62,9% der Teilnehmenden schon einmal etwas von nextbike gehört, 10,8% haben schon einmal ein Fahrrad ausgeliehen und 16,2% nutzen es sogar regelmäßig.`,
          image: `/img/nextbike-auswertung.png`,
          link: `/articles/beitrag-tassen`,
          meta: {
            author: `Rufus`,
            pubDate: `20171108`
          }
        },
        {
          title: `Und dann kam der Döner`,
          intro: `Direkt gegenüber Haus 1 eröffnete diese Woche das „Bistro Femo“ in der Georg-Hermann-Allee. Wo vor wenigen Monaten noch ein Copyshop war, gibt es ab sofort etwas Herzhaftes zu essen.`,
          image: `/img/bistro-femo-6.jpg`,
          link: `/articles/beitrag-tassen`,
          meta: {
            author: `Nikolas Ripka`,
            pubDate: `20171006`
          }
        },
        {
          title: `Und dann wurde es still in der FES`,
          intro: `Mit dem Umzug des Fachbereichs Sozial- und Bildungswissenschaften ist nun der letzte Fachbereich an den Campus Kiepenheuerallee gezogen. Allmählich wird es ganz still im alten FH-Gebäude am Alten Markt.`,
          image: `/img/fes-bilder-30.jpg`,
          link: `/articles/beitrag-tassen`,
          meta: {
            author: `Semikolon-Redaktion`,
            pubDate: `20170810`
          }
        },
        {
          title: `Pappbecher kostet extra`,
          intro: `Ab dem 1. August zahlt man in der Mensa und Cafeteria 10 Cent mehr für Heißgetränke im Pappbecher.`,
          image: `/img/cafeteria-1024x683.jpg`,
          link: `/articles/beitrag-tassen`,
          meta: {
            author: `Nikolas Ripka`,
            pubDate: `20170801`
          }
        }
      ]
    }
  }
}
</script>
