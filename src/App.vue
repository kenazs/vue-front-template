<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
    <loader v-if="isLoading" />
    <alert :alerts="alerts" @dismissed="dismissed" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loader from "@components/loader.vue";
import Alert from "@components/alert.vue";

export default {
  name: "App",
  components: {
    Loader,
    Alert
  },
  computed: mapState({
    isLoading: "loading",
    alerts: state => state.alert.items
  }),
  methods: {
    dismissed(alert) {
      this.$store.dispatch("alert/remove", alert.id);
    }
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
