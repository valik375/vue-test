import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    venues: [
      { id: '11', name: 'Kompot' },
      { id: '12', name: 'Tavernetta' }
    ]
  }
})

export default store;
