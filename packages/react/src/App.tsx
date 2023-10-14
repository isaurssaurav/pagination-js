import { getPaginationWithEllipsisArray } from '@saurssaurav/pagination-js-core';
import { EmitProps, Props } from './types';

function App(props: Props & EmitProps) {
  const paginationWithEllipsisArray = getPaginationWithEllipsisArray({
    currentPage: props.currentPage,
    pageSidesToCurrentPage: props.pageSidesToCurrentPage,
    totalPage: props.totalPage
  })

  const onCurrentPageChange = (page: number | string) => {
    if (typeof page === 'string') {
      return;
    }
    if (page > props.totalPage || page < 1) {
      return;
    }

    props.onChangeCurrentPage(page)

  };

  const isActive = (page: number | string) => {
    if (typeof page === 'string') {
      return;
    }
    if (page === props.currentPage) {
      return true;
    }
  };
  

  return (
    <>
     <div className="pagination">
    <div className="pagination__page pagination__page--first" onClick={() => {onCurrentPageChange(props.currentPage - 1)}}>&lt;</div>
    {paginationWithEllipsisArray.map(pagination =>{
      return (
        <div
  
      className={`pagination__page ${isActive(pagination)? 'pagination__page--active':''}`}
      onClick={() =>{onCurrentPageChange(pagination)}}
    >
      { pagination }
    </div>
      )
    })}
    <div className="pagination__page" onClick={() =>{onCurrentPageChange(props.currentPage + 1)}}> &gt; </div>
     </div>
    </>
  );
}

export default App;
