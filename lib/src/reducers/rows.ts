import { RowName } from "../models";
import type { Action } from "redux";

export const ADD_ROWS = "ADD_ROWS";
export const CLEAR_ROWS = "CLEAR_ROWS";

export type RowsAction = {
  rows: Set<RowName>;
  type: typeof ADD_ROWS;
};

export const createRowsAction = (rows: Set<RowName>) => {
  return {
    type: ADD_ROWS,
    rows,
  };
};

export const rows = (state: Set<RowName> = new Set(), action: Action<any>): Set<RowName> => {
  switch (action.type) {
    
    case ADD_ROWS:
      const out = new Set(state);
      (action as RowsAction).rows.forEach(out.add, out);
      return out;

    case CLEAR_ROWS:
      return new Set();

    default:
      return state;
  }
};
