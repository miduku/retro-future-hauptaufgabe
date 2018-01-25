<template>
  <transition name="layout">
    <div id="tpl-calendar">
      <nuxt/>
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/css/_vars';
@import '../assets/css/_mixins';


#tpl-calendar {
  .container {
    $fontSizeWidescreen: 2.25vw;

    .cal {
      font-family: $fontSans;
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      text-align: center;
      margin: 1em 0;

      @include widescreen {
        // font-size: 1.85rem;
      }

      .row {
        // background: pink;
        width: 100%;
        margin: 0;
        line-height: 1.25;
      }

      .year {
        .year-name {
          font-weight: normal;
          font-size: 1em;
          display: inline-block;

          @include widescreen {
            font-size: $fontSizeWidescreen;
          }
        }
      }

      .month {
        &.is-active {
          .month-name {
            opacity: 1;
          }

          ul.days {
            font-size: 1em;
            height: unset;
            transition: $transition;

            li.day .day-number {
              // font-size: 2.15vw;
              font-size: 1em;
              transition: $transition;

              @include widescreen {
                font-size: $fontSizeWidescreen;
              }
            }

              ul.events {
                display: block !important;
              }
          }
        }

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
          font-size: 1em;
          // font-size: 2.5vw;
          display: inline-block;
          cursor: pointer;
          opacity: .25;

          &:focus,
          &:hover {
            opacity: .5;
          }

          @include widescreen {
            font-size: $fontSizeWidescreen;
          }
        }

        ul.days {
          margin: -.25em .5em 0;
          // background: blueviolet;
          display: block;
          font-size: 0;
          height: 0;

          .day-overlay {
            background: #fff;
            opacity: .9;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            cursor: pointer;
          }

          li.day {
            display: inline-block;
            position: relative;
            height: 1em;
            width: 1.25em;

            @include widescreen {
              width: $fontSizeWidescreen * 1.25;
            }

            &.is-active {
              .day-container {
                position: absolute;
                z-index: 1;
                left: .1em;
                top: -.1em;
                width: 100%;
                height: 100%;
                transition: $transition;

                .day-number {
                  transform: scale(1.25);
                  transition: $transition;
                }

                .events {
                  .event {
                    .img {
                      width: 25%;
                      transition: $transition;
                    }

                    &.is-active {
                      .img {
                        top: 0;
                        width: 40%;
                      }
                    }
                  }
                }
              }

              ul.events {
                font-size: 1em;
                transition: $transition;
              }
            }

            .day-container {
              opacity: .5;

              &.has-events {
                opacity: 1;

                .day-number {
                  cursor: pointer;
                }
              }
            }

              .day-number {
                display: inline-block;
                font-size: 0;
              }

              ul.events {
                position: absolute;
                text-align: left;
                // background: purple;
                width: 35vw;
                left: calc(-35vw/2 + .5em);
                font-size: 0;
                display: none;

                @include widescreen {
                  width: 400px;
                  left: (-400px/2);
                }

                &.is-active {
                }

                li.event {
                  position: relative;
                  // background: greenyellow;

                  + li.event {
                    margin-top: 2em;
                  }

                  &.is-active {
                    h3 {
                      transition: $transition;
                      transform: translateY(1.25em);
                      margin-bottom: 1.5em;
                    }

                    .time {
                      transition: $transition;
                      transform: translateY(0)
                    }

                    .img {
                      padding-top: 15%;
                      width: 50%;
                      right: 0;
                    }
                  }

                  .event-click-container {
                    cursor: pointer;
                  }

                  h3 {
                    font-size: 1.75em;
                    margin-bottom: 1em;
                    line-height: 1;
                    position: relative;
                    z-index: 1;
                    // transition: $transition;
                  }

                  .time {
                    color: #DC0215;
                    transform: rotateX(180deg) translateY(-.35em);
                    font-size: 2.5em;
                    position: absolute;
                    top: 0;
                  }

                  .desc {
                    opacity: 0;
                    line-height: 0;

                    &.is-active {
                      transition: $transition;
                      opacity: 1;
                      line-height: 1.25;

                      p {
                        margin-bottom: .5em;
                        transition: $transition;
                      }
                    }

                    p {
                      font-family: $fontSerif;
                      margin-bottom: 0;
                    }
                  }

                  .img {
                    position: absolute;
                    top: 5%;
                    right: 25%;
                    padding-top: 0%;
                    width: 0;
                    height: 0;
                    z-index: -1;
                    transform: rotate(-15deg);
                  }

                  .venue {
                    // width: 100%;
                    color: #DC0215;
                    text-align: center;
                    opacity: 0;

                    &.is-active {
                      transition: $transition;
                      transform: translateY(.5em);
                      opacity: 1;
                    }

                    span {
                      transform: rotate(175deg);
                      display: inline-block;
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
