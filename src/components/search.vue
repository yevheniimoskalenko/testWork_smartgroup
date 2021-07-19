<template>
  <div>
    <form class="form">
      <div class="row">
        <div class="col">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="search"
              placeholder="Пошук"
              v-model="search"
            />
          </div>
        </div>
        <div class="col-1">
          <button class="btn btn-primary" @click.prevent="Search">
            Шукати
          </button>
        </div>
      </div>
    </form>
    <div class="alert alert-primary" role="alert" v-if="loading">
      Завантаження ...
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      loading: false,
    };
  },
  methods: {
    async Search() {
      try {
        this.loading = true;
        await this.$store.dispatch("search", {
          search: this.$route.query.type,
          title: this.search,
        });
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.form {
  margin-top: 20px;
}
.alert {
  text-align: center;
}
</style>
