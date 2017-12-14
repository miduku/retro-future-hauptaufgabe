import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      mouseCoords: [0, 0]
    },

    mutations: {
      newMouseCoords (state, payload) {
        state.mouseCoords = payload
      }
    }
  })
}

export default createStore
