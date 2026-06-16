import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import getProducts from '../api/get-products'

export const useProductsStore = defineStore('products', () => {
  
  // State = data
  const products = ref([]);

  // Getters
  
  
  // Actions
  async function call() {
    products.value = await getProducts();
  }

  return { products, call }
})
