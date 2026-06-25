<script setup>
import { computed, ref } from 'vue';
import { Star } from 'lucide-vue-next';
import { useScoreStore } from '@/stores/score-store';

const props = defineProps([
    "id"
])

const availableRates = ref([
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10
])

const chosen = ref(null)
const disabled = ref(false)

const { addScore } = useScoreStore();

async function buttonHandler(score) {
    if (disabled.value) return;
    await addScore(props.id, score);
    chosen.value = score;
    disabled.value = true;
}

</script>

<template>
    <div class="stars_container">
        <div 
            v-for="n in availableRates" 
            :key="n" 
            @click="buttonHandler(n)"
            class="star"
            :class="!disabled ? 'available' : ''"
        >
            <Star 
                size="18"
                stroke-width="2"
                :fill="chosen == n ? 'currentColor' : 'none'"
            /> 
        </div>
    </div> 
</template>

<style scoped>
@reference "../assets/main.css";

.stars_container {
    @apply 
        flex flex-row justify-between items-center
        w-full 
    ;
}

.star {
    @apply
        p-1 md:p-2 lg:p-1 text-text-brand
    ;
}

.available {
    @apply
        hover:text-text-default hover:scale-125
    ;
}

</style>