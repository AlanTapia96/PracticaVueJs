<template>
  <div class="flex">
    <div>
      <el-input class="input" type="text" v-model="newBreed.breedName" />
      <el-button type="primary" @click="addBreed">Enviar</el-button>
    </div>
    <div v-if="search">
      <h3 v-show="loading">
        Cargando...
      </h3>

      <div v-show="!loading">
        <div v-for="(breed, index) in breeds" :key="index">
          <Dog :breed="breed.breedName" @loaded="changeLoadingStatus"></Dog>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import Dog from "@/components/Dog";

export default {
  name: "dogSearch",
  components: { Dog },
  data() {
    return {
      breeds: [],
      newBreed: { breedName: "" },
      search: false,
      loading: true
    };
  },
  methods: {
    addBreed() {
      let breed = { ...this.newBreed };
      this.breeds = [...this.breeds, breed];
      this.newBreed.breedName = "";
      this.search = true;
    },
    changeLoadingStatus() {
      this.loading = !this.search;
    }
  }
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.flex div:first-child {
  width: 100%;
}

.input {
  width: 30% !important;
}
</style>
