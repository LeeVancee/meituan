<template>
  <div class="cart">
    <div class="content">购物车</div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'

export default {
  components: {
    Footer
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
