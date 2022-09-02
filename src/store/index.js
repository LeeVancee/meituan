import { defineStore } from 'pinia'
export const useMainStore = defineStore('main', {
  state: () => {
    return {
      cartList: [], //购物车列表数据
      orderList: [], //生成订单数据
      edit: true //编辑状态
    }
  },
  actions: {
    ADDCART(value) {
      this.cartList = value
    },
    PAY(value) {
      this.orderList = value
    },
    DELETE(value) {
      this.cartList = value
    },
    EDIT(value) {
      if (value === 'delete') {
        this.edit = true
      }
      this.edit = !this.edit
    }
  }
})
