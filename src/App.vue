<template>
  <div id="app">
    <header :class="[$style.header]">My personal costs</header>
    <main>
      <PaymentForm @add="onDataAdded" />
      <PaymentsList :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import PaymentsList from "./components/PaymentsList";
import PaymentForm from "./components/PaymentForm";

export default {
  name: "App",
  components: {
    PaymentsList,
  },

  data() {
    return {
      paymentsList: [
        {
          data: "13.05.2021",
          category: "Education",
          price: 123,
        },
        {
          data: "13.05.2021",
          category: "Education",
          price: 123,
        },
        {
          data: "13.05.2021",
          category: "Education",
          price: 123,
        },
        {
          data: "13.05.2021",
          category: "Education",
          price: 123,
        },
      ],
    };
  },
  methods: {
    onDataAdded(data) {
      this.paymentsList.push(data);
    },
  },
};
</script>

<style lang="scss" module>
.header {
  color: red;
}
</style>
