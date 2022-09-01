<template>
  <div class="order">
    <div class="content">订单</div>
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
