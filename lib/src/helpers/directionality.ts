import { RowName } from '../models';

export enum SortOrderEnum {
  CORRECT_ORDER = -1,
  SAME = 0,
  INCORRECT_ORDER = 1
}

export enum RowDirection {
  A_BEFORE_B = SortOrderEnum.CORRECT_ORDER,
  EQUAL = SortOrderEnum.SAME,
  B_BEFORE_A = SortOrderEnum.INCORRECT_ORDER,
}

export const getRowIndex = (row: RowName, rows: RowName[]) => {
  return rows.indexOf(row);
};

export const getRowDirection = (rowA: RowName, rowB: RowName, rows: RowName[]) => {
  const idxA = getRowIndex(rowA, rows);
  const idxB = getRowIndex(rowB, rows);

  if (idxA < idxB) {
    return RowDirection.A_BEFORE_B;
  }
  if (idxA > idxB) {
    return RowDirection.B_BEFORE_A;
  }

  return RowDirection.EQUAL;
};
