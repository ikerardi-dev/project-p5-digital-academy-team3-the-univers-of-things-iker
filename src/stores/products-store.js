import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import getProducts from '../api/get-products'
import sleep from '../services/utils/sleep'

export const useProductsStore = defineStore('products', () => {
  // State = data
<<<<<<< HEAD
  const products = ref([])
=======
  const products = ref([]);
  const api_error = ref(null)
>>>>>>> 91db95a74e73c6084544f061efb4ee61aa2a1239

  // Getters

  // Actions
  async function call() {
    products.value = await getProducts(1)
  }

  async function callMore(totalProducts = 200) {
    const pagesCount = Math.ceil(totalProducts / 25) - 1

    let newData
    for (let i = 1; i <= pagesCount; i++) {
      newData = await getProducts(i + 1)
      if (!newData || !newData.length) {
        // console.log("No more data in this API query.");
        // console.log(`Donloaded products total: ${products.value?.length}`);

        return
      }

      products.value = [...products.value, ...newData]
      // console.log(`${i} of ${pagesCount} added`);
      await sleep(1000)
    }

    // console.log(`Donloaded products total: ${products.value?.length}`);
  }

  return { products, call, callMore, api_error }
})
