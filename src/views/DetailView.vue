<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import getAnimeById from '../api/product-by-id.js'

const route = useRoute()
const animeData = ref(null)
const loading = ref(false)
const error = ref(null)

const airedFrom = computed(() => {
  if (!animeData.value?.aired?.from) return null
  return new Date(animeData.value.aired.from).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
})

onMounted(async () => {
  loading.value = true

  try {
    const id = route.params.id
    animeData.value = await getAnimeById(id)
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="detail-container">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else-if="!animeData">No data — animeData es null</div>
    <template v-else>
      <div class="detail-left">
        <div class="detail-image">
          <img
            :src="animeData?.images?.jpg?.large_image_url"
            :alt="animeData?.title"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="detail-data-log">
          <h2>Data Log</h2>
          <div class="data-log-grid">
            <span class="datalog-key">Type</span>
            <span class="datalog-value">{{ animeData?.type }}</span>

            <span class="datalog-key">Episodes</span>
            <span class="datalog-value">{{ animeData?.episodes }}</span>

            <span class="datalog-key">Status</span>
            <span
              :class="animeData?.status === 'Finished Airing' ? 'text-text-brand' : 'text-white'"
              class="datalog-value"
              >{{ animeData?.status }}</span
            >

            <span class="datalog-key">Aired</span>
            <span class="datalog-value">{{ airedFrom }}</span>

            <span class="datalog-key">Studio</span>
            <span class="datalog-value">{{ animeData?.studios?.[0]?.name }}</span>
          </div>
        </div>
      </div>
      <div class="detail-content">
        <section class="detail-synopsis">
          <h2>Synopsis</h2>
          <p>{{ animeData?.synopsis }}</p>
          <div class="details-genre">
            <span v-for="genre in animeData?.genres" :key="genre.mal_id" class="synopsis-genre">
              {{ genre.name }}
            </span>
          </div>
        </section>
      </div>
    </template>
  </div>
</template>

<style scoped>
/* Para usar Tailwind con @apply aqui. Cambia la dirección en otras carpetas! */
@reference "../assets/main.css";

.detail-image {
  @apply border border-border-default
    rounded-lg overflow-hidden
    w-full;
}

h2 {
  font-family: 'Hanken Grotesk';
  @apply font-semibold;
}

.detail-container {
  @apply flex gap-8 p-8 pl-5;
}

.detail-data-log {
  @apply mt-10 bg-bg-container border border-border-default
    px-5 py-3
    rounded-md;
}

.data-log-grid {
  @apply grid grid-cols-2 gap-y-3 gap-x-2
    mt-4;
}

.datalog-key {
  font-family: 'Hanken Grotesk';
  @apply text-text-muted;
}

.datalog-value {
  font-family: 'Hanken Grotesk';
  @apply text-end;
}

.detail-content {
  @apply flex flex-col gap-8
    w-2/3
    bg-bg-container border border-border-default rounded-lg
    p-20;
}

.detail-synopsis h2 {
  font-family: 'Hanken Grotesk';
  @apply border-l-4 border-white pl-3
    mb-5
    text-4xl;
}

.detail-synopsis p {
  font-family: 'Hanken Grotesk';
  @apply text-xl text-text-muted;
}

.details-genre {
  @apply flex flex-wrap gap-2 mt-4;
}

.synopsis-genre {
  font-family: 'Hanken Grotesk';
  @apply px-5 py-1 rounded-xl
    border border-border-default bg-bg-input
    text-text-muted;
}
</style>
