import { ColumnName } from "../models";
import type { Action } from "redux";
export declare const ADD_COLUMNS = "ADD_COLUMNS";
export declare const CLEAR_COLUMNS = "CLEAR_COLUMNS";
export declare type ColumnAction = {
    columns: Set<ColumnName>;
    type: typeof ADD_COLUMNS;
};
export declare const createCategoryAction: (categories: Set<ColumnName>) => {
    type: string;
    categories: Set<string>;
};
export declare const columns: (state: Set<string> | undefined, action: Action<any>) => Set<ColumnName>;
