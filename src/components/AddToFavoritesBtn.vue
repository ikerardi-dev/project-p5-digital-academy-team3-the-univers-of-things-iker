<script setup>
    import { ref } from "vue";

    import checkUser from "../services/check-user.js";
    import addToFavorites from "../services/add-to-favorites.js";
    import removeFromFavorites from "../services/remove-from-favorites.js";

    const active = ref(false)


    const addToFavListener = () => {
        const user = checkUser();

        if (!user) {
            // Mostrar mensaje
        } else if (user === "user") {
            
            if (active) {
                active.value = false;
                removeFromFavorites(id_de_producto);
                // cambiar icono vasio
            } else {
                active.value = true;
                addToFavorites(id_de_producto);
                // cambiar icono color

            }
                
        }
    }

</script>

<template>
    <div 
        @click="addToFavListener"
        class="favorite-button"
    >
        <svg 
            :class="isFavorite ? 'text-orange-500' : 'text-white'"
            class="w-5 h-5 transition-colors duration-300"
            viewBox="0 0 24 24" 
            fill="currentColor"
        >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <p>Agregar a Favoritos</p>
        
    </div>
</template>

<style scoped>
/* Para usar Tailwind con @apply aqui. Cambia la dirección en otras carpetas! */
@reference "../assets/main.css";

.favorite-button {
    font-family: 'Hanken Grotesk';
    @apply
        flex space-x-2 cursor-pointer
        mr-60 py-3 px-4 rounded-sm
        bg-bg-input border border-border-default
}


</style>
