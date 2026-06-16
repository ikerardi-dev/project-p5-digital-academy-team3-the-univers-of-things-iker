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
    >
        <!-- ICONO AQUI: -->
        <!-- <img src="" /> -->
    </div>
</template>

<style scoped>
/* Para usar Tailwind con @apply aqui. Cambia la dirección en otras carpetas! */
@reference "../assets/main.css";



</style>
