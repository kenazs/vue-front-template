<template>
  <Layout>
    <div class="container">
      <b-form @submit.prevent="loginAs">
        <b-form-group id="personGroup" label="Введите ФИО">
          <ad-picker v-model="asPersonKey" name="person_key" />
        </b-form-group>
        <b-form-group
          v-if="latestLoggedPersons.length > 0"
          id="latestLoggedPersons"
          label="Последние пользователи"
        >
          <ol>
            <li
              v-for="person in latestLoggedPersons"
              :key="person.key"
              class="person-li"
              @click.prevent="loginAs(person)"
            >
              {{ person.value }}
            </li>
          </ol>
        </b-form-group>
      </b-form>
    </div>
  </Layout>
</template>

<script>
import Layout from "@layouts/Main.vue";
import AdPicker from "@components/ad-picker.vue";

export default {
  $_veeValidate: {
    validator: "new"
  },
  components: {
    AdPicker,
    Layout
  },
  data() {
    return {
      asPersonKey: [],
      latestLoggedPersons: [],
      test: [
        {
          enterprise: "",
          unit: "",
          position: "",
          fullName: ""
        }
      ]
    };
  },
  watch: {
    asPersonKey(newPerson) {
      this.loginAs({ key: newPerson.key });
    }
  },
  created() {
    if (this.$route.params && this.$route.params.action === "logout") {
      this.$http.patch("Auth/Logout").then(() => {
        this.$store.dispatch("user/init").then(() => {
          this.$router.push("/");
        });
      });
    } else {
      this.$http.get("Auth/LatestLoggedPersons").then(r => {
        this.latestLoggedPersons = r.data;
      });
    }
  },
  methods: {
    loginAs(person) {
      this.$http.patch("Auth/LoginAs/" + person.key).then(() => {
        this.$store
          .dispatch("user/init")
          .then(() => this.$store.commit("setLoaded"));
        this.$router.push("/");
      });
    }
  }
};
</script>

<style scoped>
.person-li {
  cursor: pointer;
}
.person-li:hover {
  font-weight: bolder;
}
</style>
