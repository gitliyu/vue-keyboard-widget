import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// Store functions
const store = new Vuex.Store({
  state: {
    showKeyboard: false,
    inputTarget: null
  },
  mutations: {
    _toggleKeyboard (state, { bol, target }) {
      state.showKeyboard = bol;
      Vue.set(state, 'inputTarget', target);
    }
  }
});

export default store
