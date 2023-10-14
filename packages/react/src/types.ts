export type Props = {  
    currentPage: number;
    pageSidesToCurrentPage: number;
    totalPage: number;
  }
export  type EmitProps = {
    onChangeCurrentPage(currentPage: number): void
  }
  