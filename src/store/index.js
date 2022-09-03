import { defineStore } from 'pinia'
import { address } from '../data/addressData.js'
import { shopData } from '../data/shopData'
export const useMainStore = defineStore('main', {
  state: () => {
    return {
      cartList: [], //购物车列表数据
      orderList: [], //生成订单数据
      orderListed: [], //生成订单后数据
      edit: true, //编辑状态
      userAddress: address,
      shopData: shopData
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
    },
    //新增地址
    ADDADDRESS(value) {
      this.userAddress.map((item) => {
        if (value.isDefault) {
          item.isDefault = false
        }
      })
      this.userAddress.push(value)
    },
    // 编辑地址
    CHANGEADDRESS(value) {
      this.userAddress = this.userAddress.map((item) => {
        if (value.isDefault) {
          item.isDefault = false
        }
        return (item.id = value.id ? value : item)
      })
    },
    //地址删除按钮
    DELETEADDRESS(value) {
      this.userAddress = this.userAddress.filter((item) => {
        return !(value.id === item.id)
      })
      if (value.isDefault && this.userAddress.length) {
        this.userAddress[0].isDefault = true
      }
    }
  }
})
