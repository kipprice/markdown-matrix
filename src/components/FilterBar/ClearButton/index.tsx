import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  CLEAR_COMPETENCIES,
  CLEAR_CATEGORY_FILTERS,
  CLEAR_LEVEL_FILTERS,
  CLEAR_CATEGORIES,
  CLEAR_LEVELS,
} from "../../../reducers";
import "./styles.scss";

export const ClearButton = () => {
  const dispatch = useDispatch();
  const onClear = useCallback(() => {
    dispatch({ type: CLEAR_COMPETENCIES });
    dispatch({ type: CLEAR_CATEGORY_FILTERS });
    dispatch({ type: CLEAR_LEVEL_FILTERS });
    dispatch({ type: CLEAR_CATEGORIES });
    dispatch({ type: CLEAR_LEVELS });
  }, []);
  return (
    <button className="clear btn" onClick={onClear}>
      Clear
    </button>
  );
};
