import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [],
    formations: []
  },
  getters: {
    players: state => state.players,
    formations: state => state.formations,
    getPlayer: state => id => {
      return state.players.find(player => player.id === id);
    },
    getByPitchPosition: state => positionName => {
      return state.players.filter(player =>
        player.stats.posiblePositions.some(field => field === positionName)
      );
    },
    getGks: state => {
      return state.players.filter(player => player.stats.position === "GK");
    },
    getDefs: state => {
      const def = ["CB", "LB", "RB"];
      return state.players.filter(player =>
        def.some(field => field === player.stats.position)
      );
    },
    getMids: state => {
      const mid = ["DM", "CM", "LM", "RM", "AM"];
      return state.players.filter(player =>
        mid.some(field => field === player.stats.position)
      );
    },
    getAtts: state => {
      const att = ["CF", "LW", "RW"];
      return state.players.filter(player =>
        att.some(field => field === player.stats.position)
      );
    }
  },
  mutations: {
    loadData(state, response) {
      response.forEach((player, i) => {
        state.players.push(player);
        state.players[i].id = i;
      });
    },
    updateFormation(state, formation) {
      state.formations = formation;
    }
  },
  actions: {
    getPlayers({ commit }) {
      axios({
        method: "GET",
        url:
          "https://jsonblob.com/api/jsonblob/50fd5df9-8283-11ea-a9e3-ab457510f846"
      }).then(response => {
        commit("loadData", response.data.players);
      });
    },
    getFormation({ commit }, formation) {
      commit("updateFormation", formation);
    }
  },
  modules: {}
});
