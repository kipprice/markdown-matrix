import { RowName } from 'models';
import type { Action } from 'redux';
export declare const HIDE_ROW = "HIDE_ROW";
export declare const SHOW_ROW = "SHOW_ROW";
export declare const TOGGLE_ROW = "TOGGLE_ROW";
export declare const CLEAR_ROW_FILTERS = "CLEAR_ROW_FILTERS";
export declare type RowFilterAction = {
    type: typeof HIDE_ROW | typeof SHOW_ROW | typeof TOGGLE_ROW | typeof CLEAR_ROW_FILTERS;
    row: RowName;
};
export declare const createHiddenRowsAction: (row: RowName, type: typeof HIDE_ROW | typeof SHOW_ROW | typeof TOGGLE_ROW) => RowFilterAction;
export declare const hiddenRows: (hiddenRows: Set<string> | undefined, action: Action<any>) => Set<RowName>;
