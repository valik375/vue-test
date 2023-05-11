import Vue from 'vue'
import Vuex from 'vuex'
import venues from './venues'

Vue.use(Vuex)

const store = new Vuex.Store({

  modules: {
    venues
  }
})

export default store;
