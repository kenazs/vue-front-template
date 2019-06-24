import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"; // or Vue.$axios?

import modules from "./modules";

Vue.use(Vuex);

const state = {
  loading: true
};

const mutations = {
  setLoading(state) {
    state.loading = true;
  },
  setLoaded(state) {
    state.loading = false;
  }
};

const actions = {};

const getters = {};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules,
  strict: process.env.NODE_ENV !== "production"
});

// Automatically run the `init` action for every module,
// if one exists.
let inits = [];
for (const moduleName of Object.keys(modules)) {
  if (modules[moduleName].actions && modules[moduleName].actions.init) {
    inits.push(store.dispatch(`${moduleName}/init`));
  }
}
axios.all(inits).then(() => {
  store.commit("setLoaded");
});

export default store;
