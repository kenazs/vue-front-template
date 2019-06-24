<template>
  <transition-group name="list" tag="div" class="user-alerts">
    <b-alert
      v-for="alert in alerts"
      :key="alert.id"
      :variant="alert.type"
      :show="alert.isShow()"
      v-bind="$attrs"
      dismissible
      v-on="listeners"
      @dismissed="emit(alert)"
    >
      {{ alert.text }}
    </b-alert>
  </transition-group>
</template>

<script>
export default {
  name: "Alert",
  props: {
    alerts: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        dismissed: () => {}
      };
    }
  },
  methods: {
    emit(alert) {
      this.$emit("dismissed", alert);
    }
  }
};
</script>

<style lang="scss" scoped>
.user-alerts {
  width: 400px;
  right: 16px;
  top: 60px;
  position: fixed;
}
.alert-dismissible {
  padding-right: 57px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
