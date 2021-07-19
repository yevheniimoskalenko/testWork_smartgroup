<template>
  <div class="home">
    <router-link to="/search?type=people"> Пошук Людей</router-link>
    <router-link to="/search?type=films"> Пошук фільмів</router-link>
    <router-link to="/search?type=starships"> Пошук кораблів</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  a {
    padding: 10px;
  }
}
</style>
