<template>
  <div class="main_layout">
    <div class="wrapper">
      <header>
        <b-navbar toggleable="lg" type="light" variant="primary">
          <b-navbar-toggle target="nav_collapse" />
          <b-collapse id="nav_collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item disabled>v{{ appVersion }}</b-nav-item>
              <b-nav-item
                v-for="nav in mainNavItems"
                :key="nav.url"
                :to="nav.url"
              >
                {{ nav.title }}
              </b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown
                v-if="settingsNavItems.length > 0 || isLoginAs"
                :text="userName"
                right
              >
                <b-dropdown-item
                  v-for="item in settingsNavItemsRedirect"
                  :key="item.url"
                  :href="item.url"
                  target="_blank"
                  >{{ item.title }}</b-dropdown-item
                >
                <b-dropdown-item
                  v-for="item in settingsNavItemsWithoutRedirect"
                  :key="item.url"
                  :to="item.url"
                  >{{ item.title }}</b-dropdown-item
                >
                <b-dropdown-item
                  v-if="isLoginAs"
                  key="logout"
                  :to="{ name: 'loginas', params: { action: 'logout' } }"
                  >Выйти</b-dropdown-item
                >
              </b-nav-item-dropdown>
              <b-nav-text v-if="settingsNavItems.length === 0 && !isLoginAs">{{
                userName
              }}</b-nav-text>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </header>
      <slot />
      <div class="footer__cup" />
    </div>
    <footer class="footer">
      <div class="container">
        <div class="row mt-3">
          Если у вас возникли вопросы ...
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainLayout",
  computed: {
    ...mapState("user", [
      "userName",
      "userKey",
      "isLoginAs",
      "mainNavItems",
      "settingsNavItems",
      "securityItems",
      "settings",
      "appVersion"
    ]),
    settingsNavItemsWithoutRedirect() {
      return this.settingsNavItems.filter(nav => !nav.isRedirect);
    },
    settingsNavItemsRedirect() {
      return this.settingsNavItems.filter(nav => nav.isRedirect);
    }
  }
};
</script>

<style lang="scss">
@import "~@/styles/settings";
html,
body,
.main_layout {
  height: 100% !important;
}

.wrapper {
  min-height: 100%;
  margin-bottom: -80px;
  overflow: hidden;
}

.footer__cup {
  height: 120px;
}

.footer {
  margin-top: 20px;
  padding-top: 10px;
  height: 80px;
  background-color: $bg_color;
  color: $bg_dark;
  font-size: 12px;
  line-height: 14px;
}

header.masthead {
  position: relative;
  background-color: #343a40;
  background: url(/img/bg-masthead.jpg) no-repeat center center;
  background-size: cover;
  padding-top: 8rem;
  padding-bottom: 8rem;
}

header.masthead .overlay {
  position: absolute;
  background-color: #212529;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.3;
}

header.masthead h1 {
  font-size: 2rem;
}

@media (min-width: 768px) {
  header.masthead {
    padding-top: 12rem;
    padding-bottom: 12rem;
  }

  header.masthead h1 {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  header.masthead {
    padding-top: 16rem;
    padding-bottom: 16rem;
  }

  header.masthead h1 {
    font-size: 5rem;
  }
}
</style>
