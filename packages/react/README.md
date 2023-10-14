# Pagination React

Simple and light weight pagination for react.

![image](https://raw.githubusercontent.com/isaurssaurav/pagination-js/main/packages/vue/image.png)

## Installation

```
$ npm i @saurssaurav/pagination-js-react
```

## Usage

```js
import { useState } from 'react';
import PaginationTest from '@saurssaurav/pagination-js-react';
import '@saurssaurav/pagination-js-core/style.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

const onChange = (page:number) => {
  setCurrentPage(page);
};
  return (
    <>
 <PaginationTest
    totalPage={10}
    pageSidesToCurrentPage={1}
    currentPage={currentPage}
    onChangeCurrentPage={onChange}
  ></PaginationTest>
    </>
  );
}

export default App;

```

## Props

| Name                     | Type     | Default | Description                                                          |
| ------------------------ | -------- | ------- | -------------------------------------------------------------------- |
| `totalSize`              | Number   |         | **Required.** Total data size                                        |
| `currentPage`            | Number   |         | **Required.** Active page number                                     |
| `onChangeCurrentPage`    | Function |         | **Required.** Page change handler. Receive current pageNumber as arg |
| `pageSidesToCurrentPage` | Number   |         | **Required.** Neighbouring pages to active page                      |
