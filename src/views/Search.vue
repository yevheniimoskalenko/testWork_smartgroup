<template>
  <div>
    <search />
    <div class="films">
      <div class="films-list" v-if="films">
        <div class="row">
          <div class="col">
            <div
              class="card"
              v-if="films.type === 'films' && films.type === $route.query.type"
            >
              <div class="films-title">
                <h2 class="h2">
                  {{ films.result.title }}
                </h2>
              </div>
              <div class="films-description">
                <span>Режисер: {{ films.result.director }}</span>
                <span>Продюсер: {{ films.result.producer }}</span>
              </div>
              <a :href="films.result.url" target="_blank">{{
                films.result.title
              }}</a>
            </div>
            <div
              class="card"
              v-if="
                films.type === 'starships' && films.type === $route.query.type
              "
            >
              <div class="films-title">
                <h2 class="h2">
                  {{ films.result.name }}
                </h2>
              </div>
              <div class="films-description">
                <span>Модель: {{ films.result.model }}</span>
                <span>Клас корабля: {{ films.result.starship_class }}</span>

                <span
                  >Максемальна швидкість:
                  {{ films.result.max_atmosphering_speed }}</span
                >
              </div>
              <a :href="films.result.url" target="_blank">{{
                films.result.name
              }}</a>
            </div>
            <div
              class="card"
              v-if="films.type === 'people' && films.type === $route.query.type"
            >
              <div class="films-title">
                <h2 class="h2">
                  {{ films.result.name }}({{ films.result.birth_year }})
                </h2>
              </div>
              <div class="films-description">
                <span>Стать: {{ films.result.gender }}</span>
                <span>Зріст: {{ films.result.height }}см.</span>
                <span>Вага: {{ films.result.mass }} кг.</span>
              </div>
              <a :href="films.result.url" target="_blank">{{
                films.result.name
              }}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="films-none" v-else>
        <p class="alert alert-secondary">
          Дані не було знайдено, чи не розпочато пошук
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import search from "@/components/search.vue";

export default {
  components: { search },
  computed: {
    films() {
      return this.$store.getters.films;
    },
  },
};
</script>
<style lang="scss" scoped>
.alert {
  text-align: center;
}
.films-description {
  display: flex;
  flex-direction: column;
}
.card {
  padding: 15px;
}
</style>
