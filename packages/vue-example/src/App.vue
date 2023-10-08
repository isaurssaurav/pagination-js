<script setup lang="ts">
import { ref } from 'vue';
import PaginationTest from '@saurssaurav/pagination-js-vue';
import '@saurssaurav/pagination-js-core/style.css';
const currentPage = ref(1);

const onChange = (page) => {
  currentPage.value = page;
};
</script>

<template>
  <div> Test </div>
  <pagination-test
    :totalPage="10"
    :pageSidesToCurrentPage="2"
    :currentPage="currentPage"
    @onChangeCurrentPage="onChange"
  ></pagination-test>
</template>

<style scoped></style>
