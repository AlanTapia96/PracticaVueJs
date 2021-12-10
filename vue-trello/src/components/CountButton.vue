<template>
  <el-button type="primary" class="primary" @click="changeCant()">{{
    val
  }}</el-button>
</template>

<script>
export default {
  name: "CountButton",
  props: { val: String },
  methods: {
    changeCant() {
      this.val == "+"
        ? this.$store.dispatch("incrementAction")
        : this.$store.dispatch("decrementAction");
    }
  }
};
</script>

<style scoped>
.primary {
  margin: 0 10px;
}
</style>
