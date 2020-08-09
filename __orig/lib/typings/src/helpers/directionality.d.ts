import { RowName } from '../models';
export declare enum SortOrderEnum {
    CORRECT_ORDER = -1,
    SAME = 0,
    INCORRECT_ORDER = 1
}
export declare enum RowDirection {
    A_BEFORE_B = -1,
    EQUAL = 0,
    B_BEFORE_A = 1
}
export declare const getRowIndex: (row: RowName, rows: RowName[]) => number;
export declare const getRowDirection: (rowA: RowName, rowB: RowName, rows: RowName[]) => RowDirection;
