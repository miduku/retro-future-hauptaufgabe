<template>
  <nuxt id="tpl-calendar"/>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/css/_vars';
@import '../assets/css/_mixins';

#tpl-calendar {
  &.container {
    .cal {
      font-family: $fontSans;
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      text-align: center;
      margin: 1em 0;

      .row {
        background: pink;
        width: 100%;
        margin: 0;
        line-height: 1.25;
      }

      .year {
        .year-name {
          font-weight: normal;
          font-size: 2.5vw;
          display: inline-block;
        }
      }

      .month {
        ul {
          margin: 0;
          padding: 0;
          list-style: none;

          li {
            padding: .2em;
          }
        }

        .month-name {
          font-weight: normal;
          font-size: 2.5vw;
          display: inline-block;
        }

        ul.month-days {
          margin: -.25em .5em 0;
          background: blueviolet;
          display: block;

          > li {
            display: inline-block;
            position: relative;
            opacity: .75;

            &.has-entry {
              opacity: 1;
            }

            > span {
              cursor: pointer;
              display: inline-block;
              font-size: 2.15vw;
            }

            ul.month-events {
              position: absolute;
              text-align: left;
              background: purple;
              width: 35vw;
              left: (-35vw/2);
              font-size: 0;

              @include widescreen {
                width: 400px;
                left: (-400px/2);
              }

              &.is-active {
                font-size: 1em;

                h3 {
                  transform: translateY(1.25em);
                }

                .time {
                  transform: translateY(0)
                }
              }


              li.month-event {
                position: relative;
                h3 {
                  font-size: 1.75em;
                  margin-bottom: 1.5em;
                  transition: $transition;
                  cursor: pointer;
                }

                .time {
                  color: #DC0215;
                  transform: rotateX(180deg) translateY(-.75em);
                  font-size: 2.5em;
                  position: absolute;
                  top: 0;
                  transition: $transition;
                }

                .desc {
                  font-size: 0;
                  transition: $transition;

                  &.is-active {
                    font-size: 1em;
                  }

                  p {
                    font-family: $fontSerif;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
