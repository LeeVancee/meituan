<template>
  <div class="shopDetails">
    <Header title="店铺" />
    <div class="content">
      <div class="img"></div>
      <div class="foodClassify">
        <div class="name" v-for="(i, index) in shopShow" :key="index">
          {{ i.title }}
          <img :src="i.img" class="shop_img" />
        </div>
        <div class="classify">
          <van-tabs color="#ffc400">
            <van-tab v-for="(i, index) in shopData" :title="i.name">
              <food-list :index="index" :foodData="i.data" />
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>

    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" @click="service" />
      <van-action-bar-icon
        icon="cart-o"
        text="购物车"
        :badge="mainStore.cartList.length"
      />
      <van-action-bar-button
        type="warning"
        text="加入购物车"
        @click="handleAddCart"
      />
      <van-action-bar-button type="danger" text="立即购买" @click="clickBuy" />
    </van-action-bar>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import FoodList from './components/FoodList.vue'
import { shopShow, shopData } from '../../data/shopData.js'
import { reactive, toRefs } from 'vue'
import { Toast } from 'vant'
import { useMainStore } from '../../store/index.js'
import { useRouter } from 'vue-router'
export default {
  components: {
    Header,
    FoodList
  },
  setup() {
    const mainStore = useMainStore()
    const router = useRouter()
    let data = reactive({
      shopData,
      shopShow
    })
    // 客服点击
    const service = () => {
      Toast.fail('开发中')
    }
    // 跳转购物车
    const toCart = () => {
      router.push('./cart')
    }

    // 加入购物车
    const handleAddCart = (type) => {
      let newList = []
      data.shopData.forEach((item) => {
        item.data.items?.forEach((items) => {
          items.children.forEach((i) => {
            if (i.num > 0) {
              newList.push(i)
            }
          })
        })
      })
      if (newList.length === 0) {
        Toast('请选择商品')
        return
      }
      mainStore.ADDCART(newList)
      //console.log(newList)
      type === 'buy' ? toCart() : ''
    }
    // 立即购买
    const clickBuy = () => {
      handleAddCart('buy')
    }
    return {
      ...toRefs(data),
      service,
      handleAddCart,
      mainStore,
      clickBuy,
      toCart
    }
  }
}
</script>

<style lang="less" scoped>
.shopDetails {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
    .img {
      background: url('../../assets/yuna.jpg') no-repeat center/cover;
      width: 100%;
      height: 150px;
    }
    .foodClassify {
      height: 500px;
      background-color: #fff;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;

      .classify {
        margin-top: 10px;
      }
      .name {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        .shop_img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>
