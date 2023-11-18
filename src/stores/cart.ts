import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {

    const itemsInCart = ref(0);

  function addItemToCart() {
    itemsInCart.value++;
  }

  return { itemsInCart, addItemToCart }
})
