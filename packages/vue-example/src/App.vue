<script setup lang="ts">
import { ref } from 'vue';
import PaginationTest from '@saurssaurav/pagination-js-vue';
import '@saurssaurav/pagination-js-core/style.css'; // import default pagination css

const currentPage = ref(1);

const onChange = (page) => {
  currentPage.value = page;
};
</script>

<template>
  <pagination-test
    :totalPage="10"
    :pageSidesToCurrentPage="1"
    :currentPage="currentPage"
    @onChangeCurrentPage="onChange"
  ></pagination-test>
</template>
