<template>
  <Layout>
    <h1>Для просмотра данной страницы недостаточно прав.</h1>
  </Layout>
</template>

<script>
import Layout from "@layouts/Main";

export default {
  page: {
    title: "Недостаточно прав"
  },
  components: { Layout }
};
</script>
