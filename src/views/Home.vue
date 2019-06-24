<template>
  <div class="home">
    <ValidationObserver ref="observer">
      <form @submit.prevent="submit">
        <base-textarea
          v-model="first"
          vid="first"
          name="fff"
          rules="required|email"
        />
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";

export default {
  name: "Home",
  components: { ValidationObserver },
  data: () => ({
    first: "",
    email: ""
  }),
  methods: {
    async submit() {
      const isValid = await this.$refs.observer.validate();
      console.log(isValid);
      if (!isValid) {
        // ABORT!!
      }
    },
    onSubmit() {
      console.log("Form submitted yay!");
    },
    resetForm() {
      this.email = "";
      this.password = "";
      this.confirmation = "";
      this.subject = "";
      this.choices = [];
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    }
  }
};
</script>
