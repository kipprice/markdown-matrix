import { ColumnName } from "../models";
import type { Action } from "redux";

export const ADD_COLUMNS = "ADD_COLUMNS";
export const CLEAR_COLUMNS = "CLEAR_COLUMNS";

export type ColumnAction = {
  columns: Set<ColumnName>;
  type: typeof ADD_COLUMNS;
};

export const createColumnsAction = (columns: Set<ColumnName>) => {
  return {
    type: ADD_COLUMNS,
    columns,
  };
};

export const columns = (
  state: Set<ColumnName> = new Set(),
  action: Action<any>
): Set<ColumnName> => {
  switch (action.type) {

    case ADD_COLUMNS:
      const out = new Set(state);
      (action as ColumnAction).columns.forEach(out.add, out);
      return out;

    case CLEAR_COLUMNS:
      return new Set();
      
    default:
      return state;
  }
};
