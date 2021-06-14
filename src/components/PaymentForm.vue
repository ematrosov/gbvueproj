<template>
  <div>
    <b-button variant="success" @click="modalShow = !modalShow" class="btn-lg"
      >add new cost</b-button
    >

    <b-modal
      id="modal"
      title="add new cost"
      hide-footer
      hide-header-close
      v-model="modalShow"
    >
      <form @submit.prevent="submit" v-if="!addCategory">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">date</label>
          <input
            type="date"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="date"
          />
        </div>
        <div class="mb-3">
          <div>
            <label for="inputCategory" class="form-label">category</label>
            <b-button variant="link" @click="addCategory = true"
              ><b-icon icon="plus-circle"></b-icon
            ></b-button>
          </div>
          <select class="form-select" id="inputCategory" v-model="category">
            <option v-for="(item, index) in getPaymentTypes" :key="index">
              {{ item.name }}
            </option>
          </select>
        </div>
        <div>
          <label for="inputValue" class="form-label">value</label>
          <input
            type="number"
            class="form-control"
            id="inputValue"
            v-model.number="value"
          />
        </div>
        <button type="submit" class="btn btn-primary mt-4 d-block w-100">
          submit
        </button>
      </form>

      <form @submit.prevent="addNewCategory" v-if="addCategory">
        <div>
          <b-button variant="link" class="mb-2 p-0" @click="addCategory = false"
            ><b-icon icon="arrow-left"></b-icon
          ></b-button>
        </div>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="category name"
            v-model="name"
          />
          <button class="btn btn-primary" type="submit">submit</button>
        </div>
      </form>
    </b-modal>

    <b-alert
      class="
        position-absolute
        top-50
        start-50
        translate-middle
        p-5
        shadow-lg
        text-center
      "
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      payment added successfully
    </b-alert>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data: () => ({
    date: "",
    category: "",
    value: 0,
    addCategory: false,
    name: "",
    modalShow: false,
    dismissSecs: 2,
    dismissCountDown: 0,
  }),
  methods: {
    ...mapMutations([
      "setNewPayment",
      "setNewPaymentTypes",
      "setCurrentPageNumber",
    ]),
    submit(event) {
      event.preventDefault();
      const { date, category, value } = this;
      this.setNewPayment({ date, category, value });
      this.modalShow = false;
      this.date = "";
      this.category = "";
      this.value = 0;
      this.setCurrentPageNumber(this.getPagesCount);
      this.showAlert();
      this.$router.push({
        name: "financeRoute",
        params: { page: this.getPagesCount },
      });
    },
    addNewCategory() {
      if (this.name) {
        const { name } = this;
        this.setNewPaymentTypes({ name });
        this.addCategory = false;
        this.name = "";
      }
    },
    countDownChanged(count) {
      this.dismissCountDown = count;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    getTodayDate() {
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1;
      if (mm <= 9) {
        mm = "0" + String(mm);
      }
      let dd = today.getDate();
      if (dd <= 9) {
        dd = "0" + String(dd);
      }
      this.date = yyyy + "-" + mm + "-" + dd;
    },
  },
  computed: {
    ...mapGetters(["getPaymentTypes", "getPagesCount"]),
  },
  created() {
    this.getPaymentTypes();
    this.getPagesCount();
    this.showAlert();
  },
  mounted() {
    if (this.$route.params.payment) {
      this.getTodayDate();
      this.category = this.$route.params.payment;
      const formValue = this.$route.fullPath.split("?", 2)[1].split("=", 2);
      if (formValue[0] === "value") {
        this.value = formValue[1];
      }
    }
  },
};
</script>

<style module>
</style>
© 2021 GitHub, Inc.