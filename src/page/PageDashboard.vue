<template>
  <div>
    <PaymentForm />
    <PaymentList />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import PaymentForm from "../components/PaymentForm";
import PaymentList from "../components/PaymentList";

export default {
  components: {
    PaymentForm,
    PaymentList,
  },
  methods: {
    ...mapActions({
      fetchListData: "fetchData",
    }),
  },
  mounted() {
    this.fetchListData();
  },
};
</script>

<style>
</style>