<script setup>
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { computed } from 'vue';

const model = defineModel();

const props = defineProps([
    "totalPages"
])

const visiblePages = computed(() => {
    const total = props.totalPages;
    const current = model.value;
    const pages = [];

    if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i);
    }

    pages.push(0);

    if (current > 3) pages.push(null);

    const start = Math.max(1, current - 1);
    const end = Math.min(total - 2, current + 1);
    for (let i = start; i <= end; i++) pages.push(i);

    if (current < total - 4) pages.push(null);

    pages.push(total - 1);

    return pages;

});


const arrowLeftDisabled = computed(() => {
    return model.value == 0; 
})

const arrowRightDisabled = computed(() => {
    return model.value + 1 == props.totalPages || !props.totalPages; 
})

function prevPage () {
    if (!arrowLeftDisabled.value) {
        model.value--;
    }
}

function nextPage () {
    if (!arrowRightDisabled.value) {
        model.value++;
    }
}

</script>

<template>

    <div class="pag_container">

        <div 
            class="pag_arrows"
            @click="prevPage"
            :class="{'disabled': arrowLeftDisabled}"
        >
            <ArrowLeft />
        </div>

        <template v-if="!totalPages">
            <div
                class="pag_page disabled"
            >
                0
            </div>
        </template>

        <template v-for="(page, index) in visiblePages" :key="index">
            <div 
                v-if="page === null" 
                class="pag_dots"
            >
                ...
            </div>
            
            <div 
                v-else
                class="pag_page"
                :class="{'active': model == page}"
                @click="model = page"
            >
                {{ page  + 1 }}
            </div>
        </template>


        <div 
            class="pag_arrows"
            @click="nextPage"
            :class="{'disabled': arrowRightDisabled}"
        >
            <ArrowRight />
        </div>
    </div>

</template>


<style scoped>
@reference '../assets/main.css';

.pag_container {
    @apply 
        w-full my-8
        flex flex-row gap-3 sm:gap-4 justify-center items-center select-none
    ;
}

.pag_page {
    @apply
        p-2 px-4 flex justify-center items-center 
        rounded-lg border border-bg-surface
        
        transition-all duration-300
        hover:border hover:border-border-brand hover:text-text-brand
        hover:shadow-lg
        active:bg-bg-brand active:text-text-on-brand
        
    ;
}

.pag_arrows {
    @apply
        p-2 flex justify-center items-center 
        rounded-lg shadow-lg
        border border-border-default

        transition-all duration-300
        hover:border-border-brand hover:text-text-brand
        active:bg-bg-brand active:text-text-on-brand
    ;
}

.active {
    @apply
        bg-bg-brand-darker text-text-brand border-border-brand
    ;
}

.disabled {
    @apply 
        opacity-25 hover:border-border-default hover:text-text-default
    ;
}

.pag_dots {
    @apply 
        px-2 flex items-center text-text-muted select-none
    ;
}


</style>