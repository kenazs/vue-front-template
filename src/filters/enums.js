import store from "@state/store";

export default (value, enumType) => {
  if (value && enumType) {
    return store.getters["enums/getEnumDisplayText"](enumType, value);
  }
};
