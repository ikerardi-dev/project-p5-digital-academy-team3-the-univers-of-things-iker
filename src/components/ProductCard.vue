<script setup>

defineProps({
  id: {
    type: Number,
    required: true,
  }, 

  imgUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },    
  description: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },    
  category: {
    type: String,
    required: true,
  },  
  genres: {
    type: Array,
    required: true,
  },    
  episodes: {
    type: Number,
    required: true,
  }, 
})

</script>

<template>
    <div :id="id" class="container">
        
        <div class="image_container">
            <img class="image" :src="imgUrl" :alt="title"/>
        </div>

        <div class="content_container">

            <h3 class="title">{{ title }}</h3>

            <p class="description">{{ description }}</p>

            <div class="genres_container">
                <template v-for="genre, key in genres" :key="key">
                    <div class="genre">{{ genre }}</div>
                </template>
            </div>

            <div class="bottom_container">
                <span>{{ episodes }}</span>

                <span class="category">{{ category }}</span>
            </div>
        </div>
    </div>
</template>


<style scoped>
@referense '../assets/main.css';

.container {
    @apply 
        bg-bg-container rounded-md p-4 
        border border-border-default
        flex flex-col gap-0 justify-between
        
        ;

}

.image_container {
    @apply
        flex flex-col justify-center items-center

        ;
}

.image {
    @apply
        w-fill object-contain
        ;
}

.content_container {
    @apply 
        p-2 gap-2 flex flex-col justify-between items-center
    ;
}


.title {
    @apply 
        text-left
    ;

}

.description {
    @apply
        line-clamp-2
    ;
}

.genres_container {
    @apply 
        gap-2 flex flex-row flex-wrap justify-start items-center
    ;
}

.genre {
    @apply 
        p-2 rounded-sm border border-border-default
    ;
}
.bottom_container {
    @apply 
        flex flex-row justify-between items-center
    ;
}

.category {
    @apply 
        text-text-special
    ;
}

</style>