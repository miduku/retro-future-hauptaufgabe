<template>
  <section class="container">

    <div class="rootColumns">
      <a href="#" class="rootColumn is-left">
        uqf
      </a>

      <div class="rootColumn is-center">
        <div class="cal">
          <a
            @click.prevent="changeYear(calendar.name - 1)"
            href="#"
            class="row year"
          >
            <h2 class="year-name">{{ calendar.name - 1 }}</h2>
          </a>

          <div
            v-for="month in calendar.months"
            :key="month"
            :class="{ 'is-active': month.isActive }"
            class="row month"
          >
            <h2
              @click="toggleItems(month, calendar.months)"
              class="month-name"
            >
              {{ month.name }}
            </h2>

            <ul
              class="days"
            >
              <li
                v-for="day in month.days"
                :key="day"
                :class="{ 'is-active': day.isActive }"
                class="day"
              >

                <div
                  @click="closeOverlay(day)"
                  v-show="day.isOverlay"
                  class="day-overlay"
                ></div>

                <div
                  v-if="day.events.length > 0"
                  class="day-container has-events"
                >
                  <span
                    @click="toggleItems(day, month.days, true)"
                    class="day-number"
                  >
                    {{ day.number }}.
                  </span>

                  <ul class="events">
                    <li
                      v-for="event in day.events"
                      :key="event"
                      :class="{ 'is-active': event.isActive && day.isActive }"
                      class="event"
                    >
                      <div class="img">
                        <img :src="event.img" alt="">
                      </div>

                      <div
                        @click="toggleItems(event, day.events)"
                        class="event-click-container"
                      >
                        <h3>{{ event.title }}</h3>
                        <span class="time">{{ event.time[0] }} – {{ event.time[1] }}</span>
                      </div>

                      <div
                        v-html="event.desc"
                        :class="{ 'is-active': event.isActive && day.isActive}"
                        class="desc"
                      >
                      </div>

                      <div
                        :class="{ 'is-active': event.isActive && day.isActive}"
                        class="venue"
                      >
                        <span>{{ event.venue }}</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div
                  v-else
                  class="day-container"
                >
                  <span class="day-number">
                    {{ day.number }}.
                  </span>
                </div>

              </li>
            </ul>
          </div>

          <a
            @click.prevent="changeYear(calendar.name + 1)"
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
      calendar: {}
    }
  },

  mounted () {
    // DOM ready
    this.$nextTick(() => {
      // init
      this.createYear(new Date())
      // console.log(this.createYear(2018))
    })
  },

  methods: {
    closeOverlay (itm) {
      itm.isActive = false
      itm.isOverlay = false
    },

    toggleItems (item, items, hasOverlay = false) {
      for (const itm of items) {
        if (itm === item) {
          itm.isActive = true
          if (hasOverlay) {
            itm.isOverlay = true
          }
        } else {
          itm.isActive = false
          if (hasOverlay) {
            itm.isOverlay = false
          }
        }
      }
    },

    changeYear (newYear) {
      const d = new Date()
      d.setFullYear(newYear)

      this.createYear(d)
    },

    createYear (date) {
      const now = {
        d: date,
        year: date.getFullYear(),
        month: date.getMonth()
      }

      const d = new Date(now.year, 0, 1)

      let monthCounter = 0
      let calendar = {}
      let calYear = calendar = {
        name: now.year,
        months: []
      }

      // do while on correct year
      while (now.year === d.getFullYear()) {
        // get month name
        const monthName = d.toLocaleString('de-de', { month: 'long' })

        let calMonth = calYear.months[d.getMonth()] = {
          name: monthName,
          isActive: (d.getMonth() === now.month && d.getFullYear() === now.year),
          days: []
        }

        // do while on correct month
        while (monthCounter === d.getMonth()) {
          // compare date with events date
          // then add event to calendar
          let eventList = []

          if (events.length > 0) {
            for (let i = 0; i < events.length; i++) {
              const event = events[i]
              const eventDateFrom = new Date(event.date + event.time[0])
              const eventDateTo = new Date(event.date + event.time[1])

              const eventDate = {
                from: {
                  year: eventDateFrom.getFullYear(),
                  month: eventDateFrom.getMonth(),
                  day: eventDateFrom.getDate(),
                  hour: eventDateFrom.getHours(),
                  minute: eventDateFrom.getMinutes()
                },
                to: {
                  year: eventDateTo.getFullYear(),
                  month: eventDateTo.getMonth(),
                  day: eventDateTo.getDate(),
                  hour: eventDateTo.getHours(),
                  minute: eventDateTo.getMinutes()
                }
              }

              // event times
              if (`${eventDate.from.year}-${eventDate.from.month}-${eventDate.from.day}` === `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`) {
                const t = {
                  from: {
                    h: ('0' + eventDate.from.hour).slice(-2),
                    m: ('0' + eventDate.from.minute).slice(-2)
                  },
                  to: {
                    h: ('0' + eventDate.to.hour).slice(-2),
                    m: ('0' + eventDate.to.minute).slice(-2)
                  }
                }

                // push dat event
                eventList.push({
                  title: event.title,
                  time: [
                    `${t.from.h}:${t.from.m}`,
                    `${t.to.h}:${t.to.m}`
                  ],
                  desc: event.desc,
                  img: event.img,
                  venue: event.venue,
                  isActive: false
                })
              }
            }
          }

          calMonth.days.push({
            number: d.getDate(),
            events: eventList,
            isActive: false,
            isOverlay: false
          })

          // count day +1
          d.setDate(d.getDate() + 1)
        }

        // reset days and add to month counter
        d.setDate(1)
        monthCounter = monthCounter + 1
      }

      this.calendar = calendar
      // return calendar
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
