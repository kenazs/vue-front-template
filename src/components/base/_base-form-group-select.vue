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
      </b-form-group>
    </template>
  </ValidationProvider>
</template>

<script>
import validateMixin from "@mixins/validate-mixin";
import formGroupMixin from "@mixins/form-group-mixin";

export default {
  name: "BaseFormGroupSelect",
  mixins: [validateMixin, formGroupMixin],
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
          const val = event.target ? event.target.value : event;
          this.$emit("input", val);
        }
      };
    }
  }
};
</script>
