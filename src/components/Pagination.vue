<template>
  <div>
    <nav>
      <ul class="pagination">
        <li
          class="page-item"
          :class="{ disabled: this.getCurrentPageNumber === 1 }"
          id="pagination_previous"
        >
          <button type="button" class="page-link" @click="previous">
            <span>&laquo;</span>
          </button>
        </li>
        <li
          class="page-item"
          v-for="n in this.getPagesCount"
          :key="n"
          :id="'pagination_button_' + n"
        >
          <button type="button" class="page-link" @click="changePage(n)">
            {{ n }}
          </button>
        </li>
        <li
          class="page-item"
          :class="{
            disabled: this.getCurrentPageNumber === this.getPagesCount,
          }"
          id="pagination_next"
        >
          <button type="button" class="page-link" @click="next">
            <span>&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    ...mapMutations(["setCurrentPageNumber"]),
    changePage(n) {
      if (n !== this.getCurrentPageNumber) {
        this.setCurrentPageNumber(n);
        this.$router.push({ name: "financeRoute", params: { page: n } });
      }
    },
    previous() {
      if (this.getCurrentPageNumber > 1) {
        this.setCurrentPageNumber(this.getCurrentPageNumber - 1);
        this.$router.push({
          name: "financeRoute",
          params: { page: this.getCurrentPageNumber },
        });
      }
    },
    next() {
      if (this.getCurrentPageNumber < this.getPagesCount) {
        this.setCurrentPageNumber(this.getCurrentPageNumber + 1);
        this.$router.push({
          name: "financeRoute",
          params: { page: this.getCurrentPageNumber },
        });
      }
    },
    active() {
      for (let i = 1; i <= this.getPagesCount; i++) {
        document
          .getElementById("pagination_button_" + i)
          .classList.remove("active");
      }
      document
        .getElementById("pagination_button_" + this.getCurrentPageNumber)
        .classList.add("active");
    },
  },
  computed: {
    ...mapGetters(["getPagesCount", "getCurrentPageNumber"]),
  },
  created() {
    this.getPagesCount();
    this.getCurrentPageNumber();
  },
  mounted() {
    if (this.$route.params.page) {
      this.setCurrentPageNumber(+this.$route.params.page);
    }
  },
  updated() {
    this.active();
  },
};
</script>

<style module>
</style>