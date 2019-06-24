<template>
  <ValidationProvider :vid="vid" :name="name" :rules="rules" slim>
    <template v-slot="{ validate, valid, errors }">
      <b-form-group
        :label="label"
        :state="valid"
        :horizontal="horizontal"
        :invalid-feedback="errors[0]"
        :description="description"
      >
        <b-input
          v-model="innerValue"
          v-bind="$attrs"
          :state="valid"
          v-on="listeners"
        />
      </b-form-group>
    </template>
  </ValidationProvider>
</template>

<script>
import validateMixin from "@mixins/validate-mixin";
import formGroupMixin from "@mixins/form-group-mixin";

export default {
  name: "BaseFormGroupInput",
  mixins: [validateMixin, formGroupMixin],
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
