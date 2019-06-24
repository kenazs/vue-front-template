import Vue from "vue";
import dateFilter from "@filters/date";
import enumFilter from "@filters/enums";

Vue.filter("formatDate", dateFilter);
Vue.filter("enumDisplay", enumFilter);
