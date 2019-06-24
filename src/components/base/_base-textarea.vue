<template>
  <ValidationProvider :vid="vid" :name="name" :rules="rules" slim>
    <template v-slot="{ validate, valid, errors }">
      <b-textarea
        v-model="innerValue"
        v-bind="$attrs"
        :state="valid"
        v-on="listeners"
      />
    </template>
  </ValidationProvider>
</template>

<script>
import validateMixin from "@mixins/validate-mixin";

export default {
  name: "BaseTextarea",
  mixins: [validateMixin],
  inheritAttrs: false,
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: val => {
          this.$emit("input", val);
        }
      };
    }
  }
};
</script>
