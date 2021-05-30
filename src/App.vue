<template>
  <div id="app">
    <header :class="[$style.header]">My personal costs</header>
    <main>
      <PaymentForm />
      <PaymentsList />
    </main>
  </div>
</template>

<script>
import PaymentsList from "./components/PaymentsList";
import PaymentForm from "./components/PaymentForm";

import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsList,
    PaymentForm,
  },

  data() {
    return {
      PaymentsList: [],
    };
  },
  methods: {
    ...mapActions(["fetchData"]),
    onDataAdded(data) {
      this.PaymentsList.push(data);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss" module>
.header {
  color: red;
}
</style>
