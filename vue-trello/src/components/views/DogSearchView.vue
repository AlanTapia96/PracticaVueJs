<template>
  <div v-if="breedsList.length > 0">
    <ul class="flex">
      <li v-for="(breed, index) in breedsList" :key="index">
        <el-button type="primary"
          ><router-link :to="{ name: 'DogDetail', params: { breed: breed } }">{{
            breed
          }}</router-link></el-button
        >
      </li>
    </ul>
    <h1>Escriba el nombre de la raza deseada</h1>
    <dog-search />
  </div>
</template>

<script>
import dogSearch from "@/components/DogSearch";
import { getAllBreeds } from "@/api/api";

export default {
  name: "DogSearchView",
  components: { dogSearch },
  data() {
    return {
      breedsList: []
    };
  },

  created() {
    this.getBreeds();
  },

  methods: {
    async getBreeds() {
      const dataBreeds = await getAllBreeds();
      for (const key in dataBreeds) {
        this.breedsList.push(key);
      }
    }
  }
};
</script>

<style scoped>
.flex {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
}

.flex li {
  list-style: none;
  margin-right: 10px;
  margin-top: 10px;
}

li a {
  text-decoration: none;
  color: lightgoldenrodyellow;
}
</style>
