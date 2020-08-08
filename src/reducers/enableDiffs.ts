
import type { Action } from "redux";

export const TOGGLE_DIFFS = "TOGGLE_DIFFS";

export type EnableDiffsAction = {
  type: typeof TOGGLE_DIFFS;
};

export const createEnableDiffsAction = () => {
  return {
    type: TOGGLE_DIFFS,
  }
}

export const enableDiffs = (
  state: boolean = false,
  action: Action<any>
) => {
  switch (action.type) {
    case TOGGLE_DIFFS:
      return !state;
    default:
      return state;
  }
};
