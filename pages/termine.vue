<template>
  <section class="container">

    <div class="rootColumns">
      <a href="#" class="rootColumn is-left">
        uqf
      </a>

      <div class="rootColumn is-center">
        <div class="cal">
          <a
            @click.prevent="createYear(calendar.name - 1)"
            href="#"
            class="row year"
          >
            <h2 class="year-name">{{ calendar.name - 1 }}</h2>
          </a>

          <div
            v-for="month in calendar.months"
            :key="month"
            class="row month"
          >
            <h2 class="month-name">
              {{ month.name }}
            </h2>

            <ul class="month-days">
              <li
                v-for="day in month.days"
                :key="day"
              >
                <span @click="day[1].isActive = !day[1].isActive">
                  {{ day[0] }}.
                </span>

                <ul
                  v-if="day[1].eventList.length > 0"
                  :class="{ 'is-active': day[1].isActive }"
                  class="month-events"
                >
                  <li
                    v-for="event in day[1].eventList"
                    :key="event"
                    class="month-event"
                  >
                    <h3 @click="event.isActive = !event.isActive">{{ event.title }}</h3>
                    <span class="time">{{ event.time[0] }} – {{ event.time[1] }}</span>

                    <div
                      v-html="event.desc"
                      :class="{ 'is-active': event.isActive }"
                      class="desc"
                    >
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <a
            @click.prevent="createYear(calendar.name + 1)"
            href="#"
            class="row year"
          >
            <h2 class="year-name">{{ calendar.name + 1 }}</h2>
          </a>

        </div>
      </div>

      <a href="#" class="rootColumn is-right">
        ukf
      </a>
    </div>


  </section>
</template>

<script>
import events from '~/static/events.json'

export default {
  layout: 'calendar',

  data () {
    return {
      calendar: {},
      isActive: false,
      isActiveChild: false
    }
  },

  mounted () {
    // DOM ready
    this.$nextTick(() => {
      // init
      // this.createYear(2018)
      console.log(this.createYear(2018))
    })
  },

  methods: {
    createYear (year) {
      const d = new Date(year, 0, 1)

      let calendar = {}
      let calYear = calendar = {
        name: year,
        months: []
      }
      let month = 0

      // do while on correct year
      while (year === d.getFullYear()) {
        const monthName = d.toLocaleString('de-de', { month: 'long' }) // get month name
        // let eventContent = null
        let calMonth = calYear.months[d.getMonth()] = {
          name: monthName,
          days: []
        }

        while (month === d.getMonth()) {
          // compare date with events date
          // then add event to calendar
          let eventContent

          if (events.length > 0) {
            eventContent = {
              isActive: false,
              eventList: []
            }

            for (let i = 0; i < events.length; i++) {
              const event = events[i]

              const eventDateFrom = new Date(event.date + event.time[0])
              const eventDateTo = new Date(event.date + event.time[1])

              if (`${eventDateFrom.getFullYear()}-${eventDateFrom.getMonth()}-${eventDateFrom.getDate()}` === `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`) {
                const t = {
                  from: {
                    h: ('0' + eventDateFrom.getHours()).slice(-2),
                    m: ('0' + eventDateFrom.getMinutes()).slice(-2)
                  },
                  to: {
                    h: ('0' + eventDateTo.getHours()).slice(-2),
                    m: ('0' + eventDateTo.getMinutes()).slice(-2)
                  }
                }

                // push dat s**t
                eventContent.eventList.push({
                  title: event.title,
                  time: [
                    `${t.from.h}:${t.from.m}`,
                    `${t.to.h}:${t.to.m}`
                  ],
                  desc: event.desc,
                  img: event.img,
                  isActive: false
                })
              }
            }
          }

          calMonth.days.push([d.getDate(), eventContent])
          // console.log(calMonth.days)
          d.setDate(d.getDate() + 1)
          // eventContent = null
        }

        // reset days and add to month counter
        d.setDate(1)
        month = month + 1
      }

      this.calendar = calendar
      // return calendar
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
