<template>
  <header>
    <span class="title">Vue Trello</span>
    <router-link to="/" class="btn-header">Mis paneles</router-link>
    <router-link to="/countButtonPage" class="btn-header"
      >Boton contador</router-link
    >
    <router-link to="/DogSearchView" class="btn-header">Dog Search</router-link>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  padding: 1rem;
  background-color: rgb(71, 106, 180);
}

header .title {
  align-self: center;
  color: #eceff1;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 1rem;
}

.btn-header {
  text-decoration: none;
  background-color: rgba(127, 135, 143, 0.733);
  padding: 0.4rem;
  margin-right: 0.5rem;
  color: lightgray;
}
</style>
