<template>
  <div class="create_order">
    <Header title="生成订单" />
    <van-contact-card type="edit" :name="name" :tel="tel" @click="onEdit" />
    <div class="content">
      <div v-for="i in mainStore.orderList">
        <van-card
          :num="i.num"
          :price="i.price"
          :title="i.title"
          :thumb="i.pic"
        />
      </div>
    </div>
    <div class="pay-wrap">
      <div class="price">
        <span>商品金额</span>
        <span>￥{{ allPrice }}</span>
      </div>
      <van-button
        class="pay-btn"
        type="primary"
        @click="handleCreateOrder"
        color="#ffc400"
        block
      >
        生成订单
      </van-button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
import { Toast } from 'vant'
import Header from '../../components/Header.vue'
import { useMainStore } from '../../store/index.js'
import { useRoute, useRouter } from 'vue-router'
import { Dialog } from 'vant'
export default {
  props: ['min'],
  components: {
    Header
  },
  setup() {
    const mainStore = useMainStore()
    const router = useRouter()
    const route = useRoute()
    let data = reactive({
      tel: '',
      name: '',
      allPrice: 0
    })
    //用户信息初始化
    const initUser = () => {
      mainStore.userAddress.forEach((item) => {
        if (item.isDefault) {
          data.name = item.name
          data.tel = item.tel
        }
      })
    }
    //初始化总价价格
    const iniPrice = () => {
      let price = 0
      if (mainStore.orderList.length) {
        mainStore.orderList.forEach((item) => {
          price += item.num * item.price
        })
        data.allPrice = price
      }
    }
    onMounted(() => {
      iniPrice()
      initUser()
    })
    // 地址编辑按钮
    const onEdit = () => Toast('edit')
    // 生成订单按钮
    const handleCreateOrder = () => {
      Dialog.alert({
        title: '提示',
        message: '下单成功。'
      }).then(() => {
        // on close
        let newList = mainStore.cartList.filter((item) => {
          return !route.query.list.includes(item.id + '')
        })
        mainStore.shopData.forEach((item) => {
          item.data.items?.forEach((items) => {
            items.children.forEach((itemss) => {
              if (itemss.num > 0) {
                itemss.num = 0
              }
            })
          })
        })
        mainStore.DELETE(newList)
        mainStore.UPDATEORDER()
        router.push('./order')
      })
    }

    return {
      ...toRefs(data),
      onEdit,
      mainStore,
      handleCreateOrder
    }
  }
}
</script>

<style lang="less" scoped>
.create_order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .pay-wrap {
    padding: 10px 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e9e9e9;
    > div {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      margin: 10px 0;
      font-size: 14px;
      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }
    .pay-btn {
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>
