import { ColumnName } from '../models';
import type { Action } from 'redux';
export declare const TOGGLE_COLUMN = "TOGGLE_COLUMN";
export declare const CLEAR_COLUMN_FILTERS = "CLEAR_COLUMN_FILTERS";
export declare type HiddenColumnsAction = {
    type: typeof TOGGLE_COLUMN;
    column: ColumnName;
};
export declare const createHiddenColumnsAction: (column: ColumnName) => {
    TOGGLE_COLUMN: string;
    column: string;
};
export declare const hiddenColumns: (hiddenColumns: Set<string> | undefined, action: Action<any>) => Set<ColumnName>;
