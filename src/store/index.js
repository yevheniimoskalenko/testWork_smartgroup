import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    films: null,
  },
  getters: {
    films(state) {
      return state.films;
    },
  },
  mutations: {
    setFilms(state, payload) {
      state.films = payload;
    },
    clear(state) {
      state.films = null;
    },
  },
  actions: {
    async search({ commit }, payload) {
      commit("clear");
      try {
        const films = await axios
          .get(`https://swapi.dev/api/${payload.search}/`)
          .then((res) => res.data);

        if (payload.search === "films") {
          const result = await films.results.filter(
            (el) =>
              el.title.toLowerCase().indexOf(payload.title.toLowerCase()) > -1
          );
          commit("setFilms", { result: result[0], type: payload.search });
        }
        if (payload.search === "starships") {
          const result = await films.results.filter(
            (el) =>
              el.name.toLowerCase().indexOf(payload.title.toLowerCase()) > -1
          );

          commit("setFilms", { result: result[0], type: payload.search });
        }
        if (payload.search === "people") {
          const result = await films.results.filter(
            (el) =>
              el.name.toLowerCase().indexOf(payload.title.toLowerCase()) > -1
          );
          commit("setFilms", { result: result[0], type: payload.search });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
});
