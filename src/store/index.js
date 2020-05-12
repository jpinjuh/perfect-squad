import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: []
  },
  getters: {
    players: state => state.players
  },
  mutations: {
    loadData(state, response){
      state.players = response;
    }
  },
  actions: {
    getPlayers({ commit }) {
      axios({
        method: "GET",
        url: "https://jsonblob.com/api/jsonblob/50fd5df9-8283-11ea-a9e3-ab457510f846"
      }).then(response => {
        console.log(response.data.players[0]);
        commit("loadData", response.data.players);
      });
    }
  },
  modules: {}
});
