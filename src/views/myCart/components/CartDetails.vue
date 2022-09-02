<template>
  <div class="cartDetails">
    <!-- 商品的列表 -->
    <div class="content">
      <van-checkbox-group v-model="result" @change="groupChange">
        <div v-for="(i, index) in mainStore.cartList">
          <FoodAdd :item="i" :showCheckbox="true" :onChange="onChange" />
        </div>
      </van-checkbox-group>
    </div>
    <!-- 结算 -->
    <van-submit-bar
      :price="allPrice * 100"
      button-text="结算"
      @submit="onSubmit"
      class="submit-all"
      button-color="#ffc400"
    >
      <van-checkbox v-model="checked" checked-color="#ffc400" @click="choseAll"
        >全选</van-checkbox
      >
    </van-submit-bar>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted, computed } from 'vue'
import { useMainStore } from '../../../store/index.js'
import FoodAdd from '../../../components/FoodAdd.vue'
import { Toast } from 'vant'
export default {
  components: { FoodAdd },
  setup() {
    const mainStore = useMainStore()
    let data = reactive({
      result: [],
      checked: true
    })
    // 商品默认选中初始化
    const init = () => {
      data.result = mainStore.cartList.map((item) => item.id)
    }

    onMounted(() => {
      init()
    })

    // 商品个数增加同步
    const onChange = (value, detail) => {
      mainStore.cartList.map((item) => {
        if (item.id === detail.name) {
          item.num = value
        }
      })
    }
    // 全选 取消全选
    const choseAll = () => {
      if (data.result.length !== mainStore.cartList.length) {
        init()
      } else {
        data.result = []
      }
    }
    //更新数据
    const updata = () => {
      return mainStore.cartList.filter((item) => data.result.includes(item.id))
    }
    // 结算按钮
    const onSubmit = () => {
      if (data.result) {
        mainStore.PAY(updata())
      } else {
        Toast.fail('请选择商品')
      }
    }
    // 每个复选框点击事件触发
    const groupChange = (result) => {
      if (result.length === mainStore.cartList.length) {
        data.checked = true
      } else {
        data.checked = false
      }
      data.result = result
    }
    // 总价
    const allPrice = computed(() => {
      let countList = mainStore.cartList.filter((item) =>
        data.result.includes(item.id)
      )
      let sum = 0
      countList.forEach((item) => {
        sum += item.num * item.price
      })
      return sum
    })
    return {
      ...toRefs(data),
      mainStore,
      onChange,
      choseAll,
      groupChange,
      allPrice,
      onSubmit
    }
  }
}
</script>

<style lang="less" scoped>
.cartDetails {
  font-size: 14px;
  flex: 1;
  position: relative;
  overflow-y: auto;
  padding: 20px 20px 55px;
  .submit-all {
    position: fixed;
    bottom: 48px;
  }

  .buy {
    position: fixed;
    bottom: 58px;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    height: 50px;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    .left {
      display: flex;
      align-items: center;
    }
    .delete {
      color: #fff;
      background-color: #ffc400;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      width: 110px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }

  .content {
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>
