<template>
  <div class="hello">
    fib (<input v-model.number="operand1" />)
    fib (<input v-model.number="operand2" />)
    <input v-model.number="operand3" />
    = {{ result }}
    <div>
      <button 
      v-for="op in operations" 
      :key="op"
      @click="calculate(op)"
      >{{ op }}</button>
          </div>
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <div v-if="result < 0">Отрицательное число</div>
    <div v-else-if="result <= 1000"> Результат 0..1000
  </div>
  <div v-else>Больше</div>
  <div class="logs">
    <div v-for="(log, id) in logs" :key="id">{{ log }}></div>
  <div v-for="i in 10" :key="i">{{ i }}</div>
</template>

<script>
import Vue from "vue";
export default {
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    error: "",
    operations: ["+", "-", "/", "*"],
    btns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    logs: {},
  }),
  props: {},
  methods: {
    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    },

    calculate(op) {
      const operand1 = this.fib1;
      const operand2 = this.fib2;
      Vue.set(this.logs, Date.now(), `${operand1}${op}${operand2}=?`);

      if (op === "/" && operand2 === 0) {
        this.error = "Division by zero";
        return;
      }

      const calcOperations = {
        "+": () => opernad1 + operand2,
        "-": () => opernad1 - operand2,
        "/": () => opernad1 / operand2,
        "*": () => opernad1 * operand2,
      };
      this.result = calcOperations[op]();
    },
    sum() {
      this.result = this.operand1 + this.operand2;
    },
    sub() {
      this.result = this.operand1 - this.operand2;
    },
    div() {
      this.result = this.operand1 / this.operand2;
    },
    mul() {
      this.result = this.operand1 * this.operand2;
    },
  },
  computed: {
    fib1() {
      return this.fib(this.operand1);
    },
    fib2() {
      return this.fib(this.operand2);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.error {
  padding: 20px;
  border: 1px solid red;
}
</style>