<template>
  <section class="buttonSection">
    <CountButton val="-" />
    <h4>{{ $store.getters.cantidad }}</h4>
    <CountButton val="+" />
  </section>
</template>

<script>
import CountButton from "@/components/CountButton";

export default {
  name: "CountButtonPage",
  components: { CountButton },
  props: { val: String }
};
</script>

<style scoped>
.buttonSection {
  width: 50%;
  height: 50vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
