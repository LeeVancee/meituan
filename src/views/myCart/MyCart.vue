<template>
  <div class="cart">
    <Header title="购物车" :edit="true" />
    <CartDetails v-if="isShow" :changeShow="changeShow" />
    <Blank v-else />

    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import Blank from '../../components/Blank.vue'
import CartDetails from './components/CartDetails.vue'
import { onMounted, ref } from 'vue'
import { useMainStore } from '../../store/index.js'
export default {
  components: {
    Header,
    Footer,
    Blank,
    CartDetails
  },
  setup() {
    const mainStore = useMainStore()
    let isShow = ref(true)
    // 初始化样式
    const init = () => {
      if (mainStore.cartList.length === 0) {
        isShow.value = false
      }
    }
    const changeShow = () => {
      isShow.value = false
    }
    onMounted(() => {
      init()
    })
    return {
      isShow,
      changeShow
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
