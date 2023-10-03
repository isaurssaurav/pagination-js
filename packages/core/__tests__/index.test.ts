import { describe } from 'node:test';
import { getPaginationArray, getPaginationWithEllipsisArray } from '../src/index';

describe('Core pagination logic test', () => {
  it('should give array of number to show for pagination', () => {
    const paginationArrayWhen1 = getPaginationArray({
      totalPage: 5,
      pageSidesToCurrentPage: 1,
      currentPage: 1
    });
    const paginationArrayWhen3 = getPaginationArray({
      totalPage: 5,
      pageSidesToCurrentPage: 1,
      currentPage: 3
    });

    expect(paginationArrayWhen1).toEqual([1, 2, 5]);
    expect(paginationArrayWhen3).toEqual([1, 2, 3, 4, 5]);
  });

  it('should give array of number with ellipsis in-between for pagination', () => {
    const paginationWithEllipsis = getPaginationWithEllipsisArray({
      totalPage: 5,
      pageSidesToCurrentPage: 1,
      currentPage: 1
    });
    const paginationWithEllipsis2 = getPaginationWithEllipsisArray({
      totalPage: 100,
      pageSidesToCurrentPage: 1,
      currentPage: 10
    });
    expect(paginationWithEllipsis).toEqual([1, 2, '...', 5]);
    expect(paginationWithEllipsis2).toEqual([1, '...', 9, 10, 11, '...', 100]);
  });
});
