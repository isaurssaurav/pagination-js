export type Options = {
  currentPage: number;
  pageSidesToCurrentPage: number;
  totalPage: number;
};

const getLeftSideFromCurrentPage = (currentPage: number, pageSidesToCurrentPage: number) =>
  currentPage - pageSidesToCurrentPage;
const getRightSideFromCurrentPage = (currentPage: number, pageSidesToCurrentPage: number) =>
  currentPage + pageSidesToCurrentPage + 1;

const getPaginationArray = (options: Options): number[] => {
  const paginationArray = [];

  const { currentPage, pageSidesToCurrentPage, totalPage } = options;
  const leftSideFromCurrentPage = getLeftSideFromCurrentPage(currentPage, pageSidesToCurrentPage);
  const rightSideFromCurrentPage = getRightSideFromCurrentPage(currentPage, pageSidesToCurrentPage);

  for (let i = 1; i <= totalPage; i++) {
    if (i === 1 || i === totalPage || (i >= leftSideFromCurrentPage && i < rightSideFromCurrentPage)) {
      paginationArray.push(i);
    }
  }

  return paginationArray;
};

const getPaginationWithEllipsisArray = (options: Options): (number | string)[] => {
  const paginationWithEllipsisArray = [];
  const paginationArray = getPaginationArray(options);
  let next = null;

  for (let paginationNum of paginationArray) {
    if (next && paginationNum - next !== 1) {
      paginationWithEllipsisArray.push('...');
    }
    paginationWithEllipsisArray.push(paginationNum);
    next = paginationNum;
  }

  return paginationWithEllipsisArray;
};

export { getPaginationWithEllipsisArray, getPaginationArray };
