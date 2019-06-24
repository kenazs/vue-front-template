import Vue from "vue";
import Datetime from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";
import { DateTime } from "luxon";
import { Settings } from "luxon";
Settings.defaultLocale = "ru";

if (
  typeof Intl.DateTimeFormat.prototype.formatToParts !== "function" &&
  DateTime.local().locale === "ru"
) {
  Intl.DateTimeFormat.prototype.formatToParts = function(date) {
    return [
      {
        type: "weekday",
        value: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][date.getDay()] || "?"
      },
      {
        type: "month",
        value: [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь"
        ][date.getMonth()]
      }
    ];
  };
}

Vue.use(Datetime);
