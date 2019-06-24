export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    horizontal: {
      type: Boolean,
      default: true
    },
    invalidFeedback: {
      type: String,
      default: "Это поле обязательно для заполнения"
    },
    description: {
      type: String,
      default: ""
    }
  }
};
