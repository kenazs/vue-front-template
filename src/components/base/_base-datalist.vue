<template>
  <ValidationProvider :vid="vid" :name="name" :rules="rules" slim>
    <template v-slot="{ validate, valid, errors }">
      <b-datalist :id="id" v-bind="$attrs" v-on="listeners" />
    </template>
  </ValidationProvider>
</template>

<script>
import validateMixin from "@mixins/validate-mixin";

export default {
  name: "BaseDatalist",
  mixins: [validateMixin],
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => {
          return event.target.value;
        }
      };
    }
  }
};
</script>
