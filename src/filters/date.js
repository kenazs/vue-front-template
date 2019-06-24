import { DateTime } from "luxon";

export default (value, format) => {
  if (value && value) {
    return DateTime.fromISO(String(value)).toFormat(format);
  }
};
