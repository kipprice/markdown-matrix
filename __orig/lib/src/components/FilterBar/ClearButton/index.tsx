import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  CLEAR_ELEMENTS,
  CLEAR_COLUMN_FILTERS,
  CLEAR_ROW_FILTERS,
  CLEAR_COLUMNS,
  CLEAR_ROWS,
} from "../../../reducers";
import "./styles.scss";

export const ClearButton = () => {
  const dispatch = useDispatch();
  const onClear = useCallback(() => {
    dispatch({ type: CLEAR_ELEMENTS });
    dispatch({ type: CLEAR_COLUMN_FILTERS });
    dispatch({ type: CLEAR_ROW_FILTERS });
    dispatch({ type: CLEAR_COLUMNS });
    dispatch({ type: CLEAR_ROWS });
  }, []);
  return (
    <button className="clear btn" onClick={onClear}>
      Clear
    </button>
  );
};
