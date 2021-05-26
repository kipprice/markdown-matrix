import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { State } from "../models";
import {
  elements,
  hiddenColumns,
  hiddenRows,
  columns,
  rows,
  displayMode,
  similarityGraph,
  enableDiffs,
  renderHtml,
  disableCollapsing,
<<<<<<< Updated upstream
  singleFileOnly,
=======
  specificDisabledForCollapsing
>>>>>>> Stashed changes
} from "../reducers";

const rootReducer = combineReducers({
  elements,
  columns,
  rows,
  hiddenColumns,
  hiddenRows,
  displayMode,
  similarityGraph,
  enableDiffs,
  renderHtml,
  disableCollapsing,
<<<<<<< Updated upstream
  singleFileOnly,
=======
  specificDisabledForCollapsing,
>>>>>>> Stashed changes
});

export const store = createStore<State, any, any, any>(
  rootReducer,
  applyMiddleware(thunk)
);
