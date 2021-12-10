<template>
  <div>
    <h2>{{ breed }}</h2>
    <img :src="dataDog[0]" alt="" />
  </div>
</template>

<script>
import { getDog } from "@/api/api";

export default {
  name: "dog",
  props: { breed: String },
  data() {
    return {
      dataDog: {}
    };
  },

  created() {
    this.getData();
    this.changeLoadingState();
  },

  methods: {
    async getData() {
      try {
        const paramBreed = this.$route.params.breed;
        let dataDogSearch;
        //Si viene por URL busco la raza en la URL, sino lo tomo del valor ingresado en el input
        paramBreed
          ? (dataDogSearch = await getDog(paramBreed.toLowerCase()))
          : (dataDogSearch = await getDog(this.breed.toLowerCase()));
        this.dataDog = dataDogSearch;
      } catch (e) {
        console.log(e);
      }
    },
    changeLoadingState() {
      setTimeout(() => {
        this.$emit("loaded");
      }, 3000);
    }
  }
};
</script>

<style></style>
