"use strict";

import Vue from "vue";
import axios from "axios";
import { HTTP } from "@/system/http";

Plugin.install = function(Vue) {
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return axios;
      }
    },
    $http: {
      get() {
        return HTTP;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
