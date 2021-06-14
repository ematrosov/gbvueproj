<template>
  <div>
    <PaymentForm class="mb-3" />
    <div class="row">
      <div class="col">
        <PaymentList />
        <Pagination class="mt-3" />
      </div>
      <div class="col">
        <Chart />
      </div>
    </div>
  </div>
</template>

<script>
import PaymentForm from "./PaymentForm";
import PaymentList from "./PaymentList";
import Pagination from "./Pagination";
import Chart from "./Chart";
import { mapActions } from "vuex";
export default {
  components: {
    PaymentForm,
    PaymentList,
    Pagination,
    Chart,
  },
  data: () => ({}),
  methods: {
    ...mapActions(["fetchData"]),
  },
  mounted() {
    this.fetchData();
    console.log(this.$modal);
  },
};
</script>

<style module>
</style>