<template>
  <div class="store_list">
    <div v-for="(i, index) in store_list" :key="index" class="store_list_item">
      <StoreItem :item="i" />
    </div>
  </div>
</template>

<script setup>
import StoreItem from './StoreItem.vue'

defineProps(['store_list'])
</script>

<style lang="less" scoped>
.store_list_item {
  margin-top: 10px;
}
</style>
