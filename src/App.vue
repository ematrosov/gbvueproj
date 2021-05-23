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
    PaymentForm
  },

  data() {
    return {
     PaymentsList: []
  },
},
methods: {
  onDataAdded (data) {
    this.PaymentsList.push(data)
  }
}

}



</script>

<style lang="scss" module>
.header {
  color: red;
}
</style>
