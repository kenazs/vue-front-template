import { HTTP } from "@/system/http";

export const state = {
  userName: null,
  userKey: null,
  isLoginAs: false,
  mainNavItems: [],
  settingsNavItems: [],
  securityItems: [],
  settings: {},
  appVersion: ""
};

export const getters = {};

export const mutations = {
  setValue(state, { property, value }) {
    state[property] = value;
  }
};

export const actions = {
  init({ commit }) {
    return new Promise((resolve, reject) => {
      HTTP.get("auth/currentuser")
        .then(r => {
          commit("setValue", {
            property: "userName",
            value: r.data.userName
          });
          commit("setValue", {
            property: "userKey",
            value: r.data.userKey
          });
          commit("setValue", {
            property: "isLoginAs",
            value: r.data.isLoginAs
          });
          commit("setValue", {
            property: "mainNavItems",
            value: r.data.mainNavItems
          });
          commit("setValue", {
            property: "settingsNavItems",
            value: r.data.settingsNavItems
          });
          commit("setValue", {
            property: "securityItems",
            value: r.data.securityItems
          });
          commit("setValue", {
            property: "appVersion",
            value: r.data.appVersion
          });
          commit("setValue", {
            property: "settings",
            value: r.data.settings
          });
          resolve();
        })
        .catch(() => reject());
    });
  }
};
