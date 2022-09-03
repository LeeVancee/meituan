<template>
  <div class="header">
    <van-icon name="arrow-left" class="icon" @click="toBack" />
    <div>{{ title }}</div>
    <div class="edit" v-if="edit" @click="editClick">
      {{ mainStore.edit ? '编辑' : '完成' }}
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import emitter from '../common/js/evenbus.js'
import { Toast } from 'vant'
import { useMainStore } from '../store/index.js'

defineProps(['title', 'edit'])

const mainStore = useMainStore()
const router = useRouter()
const toBack = () => {
  router.back()
}

// 编辑按钮
const editClick = () => {
  if (store.state.cartList.length) {
    mainStore.EDIT()
    emitter.emit('edit')
  } else {
    Toast.fail('购物车空空如也')
  }
}
</script>

<style lang="less" scoped>
.header {
  background-color: #fff;
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
  .edit {
    font-size: 16px;
    position: absolute;
    right: 15px;
    font-weight: normal;
  }
  .icon {
    position: absolute;
    left: 10px;
  }
}
</style>
