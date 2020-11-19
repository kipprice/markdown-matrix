import type { Dispatch } from "react";
import {
  CLEAR_ELEMENTS,
  CLEAR_COLUMN_FILTERS,
  CLEAR_ROW_FILTERS,
  CLEAR_COLUMNS,
  CLEAR_ROWS,
} from "../reducers";

export const clear = (dispatch: Dispatch<any>) => {
  dispatch({ type: CLEAR_ELEMENTS });
  dispatch({ type: CLEAR_COLUMN_FILTERS });
  dispatch({ type: CLEAR_ROW_FILTERS });
  dispatch({ type: CLEAR_COLUMNS });
  dispatch({ type: CLEAR_ROWS });
};
