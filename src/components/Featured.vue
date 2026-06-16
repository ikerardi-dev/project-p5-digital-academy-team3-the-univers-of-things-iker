<script setup>
import { ref, onMounted } from 'vue';
import getFeatured from '../services/get-featured';

const anime = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
    const data = await getFeatured();
    if (data) {
        anime.value = data;
    } else {
        error.value = 'No se pudo cargar el anime destacado.';
    }
    loading.value = false;
});
</script>

<template>
  <section class="featured-section">
    <h2 class="featured-title">Anime de la semana</h2>

    <p v-if="loading" class="featured-loading">Cargando...</p>
    <p v-else-if="error" class="featured-error">{{ error }}</p>

    <div v-else-if="anime" class="featured-card"
    :style="{ backgroundImage: `url(${anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url})` }">
      
      <div class="featured-overlay"></div>

      <div class="featured-info">
        <h3 class="featured-anime-title">{{ anime.title }}</h3>
        <p v-if="anime.title_english" class="featured-anime-subtitle">{{ anime.title_english }}</p>

        <p class="featured-synopsis">{{ anime.synopsis }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "../assets/main.css";

/* .featured-section {
  @apply w-full flex flex-col gap-4 p-6;
} */

.featured-title {
  @apply text-2xl font-bold;
}

.featured-loading,
.featured-error {
  @apply text-text-special;
}

.featured-card {
  @apply
    relative rounded-lg overflow-hidden
    w-full h-190
    bg-cover bg-center;
}

.featured-overlay {
  @apply
    absolute inset-0;
    background: linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.5), transparent);
}

.featured-image {
  @apply
    rounded-lg object-cover
    w-48 h-auto
    bg-none;
}

.featured-info {
  @apply 
    absolute bottom-6 left-6
    flex flex-col gap-3
    z-10 max-w-md;
}

.featured-anime-title {
  @apply text-xl font-bold;
}

.featured-anime-subtitle {
  @apply text-text-special text-sm;
}

.featured-synopsis {
  @apply line-clamp-4 leading-relaxed;
}

.featured-genres {
  @apply flex flex-row flex-wrap gap-2;
}

.featured-genre-tag {
  @apply
    px-2 py-1 rounded-sm
    border border-border-default
    text-sm;
}

.featured-meta {
  @apply flex flex-row flex-wrap gap-4 mt-auto pt-2;
}

.featured-meta-item {
  @apply text-sm;
}

.featured-status {
  @apply text-text-special;
}
</style>
