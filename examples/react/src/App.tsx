import { useState } from 'react';
import './App.css';
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