<template>
  <div class="home">
    <div class="content">
      <!-- 头部 -->
      <div class="header">
        <div class="text">外卖</div>
        <div class="location">
          <van-icon name="location" />
          <span>下北泽</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <!-- 主体 -->
      <div class="main">
        <div class="main_bg">
          <div class="search">
            <input type="text" />
            <div class="search_text">搜索</div>
          </div>
          <div class="classify">
            <div class="big_classify"></div>
            <div class="small_classify"></div>
          </div>
        </div>
        <div class="tabs"></div>
      </div>
    </div>
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
.home {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;

    .main {
      margin-top: -30px;
      .main_bg {
        background-image: linear-gradient(#fff, #f5f5f5);
        padding: 10px 20px 0 20px;
        border-radius: 30px 30px 0 0;
        position: relative;
        .search {
          position: relative;
          .search_text {
          }
          input {
          }
        }
      }
    }
    .header {
      background-image: linear-gradient(#ffc400, #fff);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 20px 40px 20px;
      .text {
        font-size: 20px;
        font-weight: 600;
      }
      .location {
        span {
          margin: 0 5px;
        }
        font-size: 14px;
      }
    }
  }
}
</style>
