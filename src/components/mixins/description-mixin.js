export default {
  props: {
    description: {
      type: String,
      default: ""
    }
  },
  computed: {
    hasDescription() {
      return this.description && this.description.length > 0;
    }
  }
};
