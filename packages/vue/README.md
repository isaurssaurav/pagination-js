# Pagination Vue

Simple and light weight pagination for vue.

![image](https://raw.githubusercontent.com/isaurssaurav/pagination-js/main/packages/vue/image.png)

## Installation

```
$ npm i @saurssaurav/pagination-js-vue
```

## Usage

```js
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
    :totalPage=10
    :pageSidesToCurrentPage=2
    :currentPage="currentPage"
    @onChangeCurrentPage="onChange"
  ></pagination-test>
</template>

```

## Props

| Name                     | Type     | Default | Description                                                          |
| ------------------------ | -------- | ------- | -------------------------------------------------------------------- |
| `totalSize`              | Number   |         | **Required.** Total data size                                        |
| `currentPage`            | Number   |         | **Required.** Active page number                                     |
| `onChangeCurrentPage`    | Function |         | **Required.** Page change handler. Receive current pageNumber as arg |
| `pageSidesToCurrentPage` | Number   |         | **Required.** Neighbouring pages to active page                      |
