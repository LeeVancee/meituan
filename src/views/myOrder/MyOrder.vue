<template>
  <div class="order">
    <Header title="订单" />
    <div class="content">
      <van-tabs color="#ffc400">
        <van-tab v-for="i in navData" :title="i">
          <div
            v-for="i in mainStore.orderListed"
            v-if="i === '全部' && mainStore.orderListed.length"
          >
            <van-card
              :num="i.num"
              :price="i.price"
              :title="i.title"
              :thumb="i.pic"
            />
          </div>
          <Blank v-else />
        </van-tab>
      </van-tabs>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import Footer from '../../components/Footer.vue'
import Header from '../../components/Header.vue'
import Blank from '../../components/Blank.vue'
import { useMainStore } from '../../store'

const mainStore = useMainStore()
let data = reactive({
  navData: ['全部', '交易完成', '待付款', '待发货', '已发货']
})
const { navData } = toRefs(data)
</script>

<style lang="less" scoped>
.order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
