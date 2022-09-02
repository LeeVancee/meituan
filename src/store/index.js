import { defineStore } from 'pinia'
import { address } from '../data/addressData.js'
export const useMainStore = defineStore('main', {
  state: () => {
    return {
      cartList: [], //购物车列表数据
      orderList: [], //生成订单数据
      orderListed: [], //生成订单后数据
      edit: true, //编辑状态
      userAddress: address
    }
  },
  actions: {
    // 添加购物车
    ADDCART(value) {
      this.cartList = value
    },
    // 结算
    PAY(value) {
      this.orderList = value
    },
    // 删除
    DELETE(value) {
      this.cartList = value
    },
    // 编辑
    EDIT(value) {
      if (value === 'delete') {
        this.edit = true
      }
      this.edit = !this.edit
    },
    // 生成订单
    UPDATEORDER() {
      this.orderListed = this.orderListed.concat(this.orderList)
    }
  }
})
