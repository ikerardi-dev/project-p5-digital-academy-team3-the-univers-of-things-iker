import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import getProducts from '../api/get-products'

export const useProductsStore = defineStore('products', () => {
  
  // State = data
  const products = reactive([]);

  // Getters
  
  
  // Actions
  async function call() {
    products = await getProducts();
  }

  return { products, call }
})
