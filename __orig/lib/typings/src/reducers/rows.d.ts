import { RowName } from "../models";
import type { Action } from "redux";
export declare const ADD_ROWS = "ADD_ROWS";
export declare const CLEAR_ROWS = "CLEAR_ROWS";
export declare type RowsAction = {
    rows: Set<RowName>;
    type: typeof ADD_ROWS;
};
export declare const createRowsAction: (rows: Set<RowName>) => {
    type: string;
    rows: Set<string>;
};
export declare const rows: (state: Set<string> | undefined, action: Action<any>) => Set<RowName>;
