<template>
  <div id="app">
    <header class="header">My personal costs</header>
    <main>
      <PaymentForm />
      <PaymentsList />
    </main>
  </div>
</template>

<script>
import PaymentList from "./components/PaymentsList.vue";
import PaymentForm from "./components/PaymentForm.vue";

import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    PaymentList,
    PaymentForm,
  },

  data() {
    return {
      page: "dashboard",
    };
  },
  methods: {
    setPage() {
      this.page = location.hash.slice(1);
    },
  },

  mounted() {
    this.setPage();
    window.addEventListener("hashchange", () => {
      this.setPage();
    });
  },
};
</script>

<style lang="scss" module>
.header {
  color: red;
}
</style>
