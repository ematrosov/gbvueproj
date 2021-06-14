<template>
  <div>
    <b-table hover :items="getPaymentsOnPage"></b-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["getPaymentsOnPage"]),
  },
  created() {
    this.getPaymentsOnPage();
  },
};
</script>

<style module>
</style>