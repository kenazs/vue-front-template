export const state = {
  flags: [{ value: true, text: "Да" }, { value: false, text: "Нет" }]
  /*workPermissionStatus: [
    { value: "Active", text: "Активен" },
    { value: "Closed", text: "Закрыт" }
  ],
  forms: [
    {
      value: {
        type: "DangerousWork",
        component: "FormDangerousWork"
      },
      text: "Выполнение работ повышенной опасности"
    }
  ]*/
};

export const getters = {
  //# this.$store.getters.getEnumOptions("urgency")
  getEnumOptions: state => enumType => {
    let options = state[enumType];
    if (!options) {
      throw new Error(`State doesn't contains "${enumType}"`);
    }
    return options;
  },
  //# this.$store.getters.getEnumCertainOptions("taskStatus", ["New","InConfirm"])
  getEnumCertainOptions: state => (enumType, enumValues) => {
    let options = state[enumType];
    if (!options) {
      throw new Error(`State doesn't contains "${enumType}"`);
    }
    if (!enumValues || enumValues.length === 0) {
      throw new Error(`EnumValues must contains elements! ${enumType}`);
    }
    let result = [];
    enumValues.forEach(v => {
      let option = options.find(o => o.value === v);
      if (!option) {
        throw new Error(`Enum "${enumType}" doesn't contains value "${v}"`);
      }
      result.push(option);
    });
    return result;
  },
  //# this.$store.getters.getEnumDisplayText("taskStatus", "New")
  getEnumDisplayText: state => (enumType, enumValue) => {
    let options = state[enumType];
    if (!options) {
      throw new Error(`State doesn't contains "${enumType}"`);
    }
    let result = options.find(o => o.value === enumValue);
    ///TODO value.type ...
    if (!result) result = options.find(o => o.value.type === enumValue);
    if (!result) {
      throw new Error(`Enum "${enumType}" doesn't contains "${enumValue}"`);
    }
    return result.text;
  }
};
