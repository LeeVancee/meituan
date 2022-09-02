import { defineStore } from 'pinia'
export const useMainStore = defineStore('main', {
  state: () => {
    return {
      cartList: [], //购物车列表数据
      orderList: [] //生成订单数据
    }
  },
  actions: {
    ADDCART(value) {
      this.cartList = value
    },
    PAY(value) {
      this.orderList = value
    }
  }
})
