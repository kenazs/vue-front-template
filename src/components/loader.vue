<template>
  <transition name="fade">
    <div class="loader-cnt">
      <div class="loader">
        <div class="loader-spin" />
        <div class="loader-text">Загрузка...</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style lang="scss" scoped>
@import "~@styles/settings.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.loader-cnt {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1001;

  .loader {
    display: table;
    position: absolute;
    height: 50px;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -70px;
  }
  .loader-spin {
    border: 6px solid $bg_color;
    border-top: 6px solid $custom_main_color;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }
  .loader-text {
    padding-left: 10px;
    font-size: 15px;
    color: $custom_main_color;
  }
  .loader-spin,
  .loader-text {
    display: table-cell;
    vertical-align: middle;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
