import { defineStore } from 'pinia'
export const useMainStore = defineStore('main', {
  state: () => {
    return {
      cartList: []
    }
  },
  actions: {
    ADDCART(value) {
      this.cartList = value
    }
  }
})
