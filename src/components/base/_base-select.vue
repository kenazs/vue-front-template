<template>
  <ValidationProvider :vid="vid" :name="name" :rules="rules" slim>
    <template v-slot="{ validate, valid, errors }">
      <b-select
        v-model="innerValue"
        v-bind="$attrs"
        :state="valid"
        v-on="listeners"
      >
        <template slot="first">
          <option :value="null" hidden disabled>
            {{ placeholder }}
          </option>
        </template>
      </b-select>
    </template>
  </ValidationProvider>
</template>

<script>
import validateMixin from "@mixins/validate-mixin";

export default {
  mixins: [validateMixin],
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: ""
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => {
          const val = event && event.target ? event.target.value : event;
          this.$emit("input", val);
        }
      };
    }
  }
};
</script>
