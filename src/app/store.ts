import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { State } from "../models";
import { 
  competencies, 
  hiddenCategories, 
  hiddenLevels, 
  categories, 
  levels, 
  displayMode, 
  similarityGraph ,
  enableDiffs
} from "../reducers";


const rootReducer = combineReducers({
  categories,
  levels,
  competencies,
  hiddenLevels,
  hiddenCategories,
  displayMode,
  similarityGraph,
  enableDiffs,
});

export const store = createStore<State, any, any, any>(
  rootReducer,
  applyMiddleware(thunk)
);
