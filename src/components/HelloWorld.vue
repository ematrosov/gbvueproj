<template>
  <div class="hello">
    fib (<input v-model.number="operand1" />) fib (<input
      v-model.number="operand2"
    />) = {{ result }}
    <div>
      <button v-for="op in operations" :key="op" @click="calculate(op)">
        {{ op }}
      </button>
    </div>
    <label
      ><input type="checkbox" v-model="showvk" />Отобразить экранную
      клавиатуру</label
    >
    <div v-if="showvk">
      Виртуальная клавиатура
      <button v-for="btn in 10" :key="btn" @click="inputNum(btn - 1)">
        {{ btn - 1 }}
      </button>
      <button @click="eraseOne">E</button>
      <br /><br />
      <label><input type="radio" value="1" v-model="operch" />Операнд1</label>
      <label><input type="radio" value="2" v-model="operch" />Операнд2</label>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    operations: ["+", "-", "/", "*"],
    showvk: false,
    operch: "",
  }),
  props: {},
  methods: {
    inputNum(i) {
      const { operch } = this;
      const input = operch === "1" ? "operand1" : "operand2";
      this[input] = +(this[input] += String(i));
    },
    eraseOne() {
      const { operch } = this;
      const input = operch === "1" ? "operand1" : "operand2";
      this[input] = Math.trunc(this[input] / 10);
    },
    calculate(op) {
      const operand1 = this.operand1;
      const operand2 = this.operand2;

      const calcOperations = {
        "+": () => operand1 + operand2,
        "-": () => operand1 - operand2,
        "/": () => operand1 / operand2,
        "*": () => operand1 * operand2,
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