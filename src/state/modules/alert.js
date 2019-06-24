export const state = {
  items: []
};

export const mutations = {
  add(state, { text, type }) {
    var id = Symbol();
    state.items.push({
      id,
      text,
      type,
      dismissCountDown: 15,
      isShow() {
        if (this.type !== "success") {
          return true;
        }
        return this.dismissCountDown;
      }
    });
  },
  remove(state, id) {
    var index = state.items.findIndex(i => i.id === id);
    if (index !== -1) {
      state.items.splice(index, 1);
    }
  }
};

export const getters = {};

export const actions = {
  addError({ commit }, text) {
    commit("add", { text, type: "danger" });
  },
  addSuccess({ commit }, text) {
    commit("add", { text, type: "success" });
  },
  addWarning({ commit }, text) {
    commit("add", { text, type: "warning" });
  },
  remove({ commit }, alertId) {
    commit("remove", alertId);
  }
};
