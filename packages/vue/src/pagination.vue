<template>
  <div class="pagination">
    <div class="pagination__page" @click="onCurrentPageChange(currentPage - 1)">&lt;</div>
    <div
      v-for="(pagination, index) in paginationWithEllipsisArray"
      :key="index"
      class="pagination__page"
      :class="{ 'pagination__page--active': isActive(pagination) }"
      @click="onCurrentPageChange(pagination)"
    >
      {{ pagination }}
    </div>
    <div class="pagination__page" @click="onCurrentPageChange(currentPage + 1)">></div>
  </div>
</template>

<script setup lang="ts">
import { getPaginationWithEllipsisArray } from '@saurssaurav/pagination-js-core';
import { computed } from 'vue';

const props = defineProps<{
  currentPage: number;
  pageSidesToCurrentPage: number;
  totalPage: number;
}>();

const emit = defineEmits<{
  (e: 'onChangeCurrentPage', currentPage: number): void;
}>();

const onCurrentPageChange = (page: number | string) => {
  if (typeof page === 'string') {
    return;
  }
  if (page > props.totalPage || page < 1) {
    return;
  }

  emit('onChangeCurrentPage', page);
};

const isActive = (page: number | string) => {
  if (typeof page === 'string') {
    return;
  }
  if (page === props.currentPage) {
    return true;
  }
};

const paginationWithEllipsisArray = computed(() => {
  return getPaginationWithEllipsisArray({
    currentPage: props.currentPage,
    pageSidesToCurrentPage: props.pageSidesToCurrentPage,
    totalPage: props.totalPage
  });
});
</script>

<style></style>
