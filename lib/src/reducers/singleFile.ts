import type { Action } from "redux";

export const SET_SINGLE_FILE_ONLY = "SET_SINGLE_FILE_ONLY";

export type SetSingleFileOnly = {
  type: typeof SET_SINGLE_FILE_ONLY;
};

export const createSetSingleFileOnlyAction = () => {
  return {
    type: SET_SINGLE_FILE_ONLY,
  };
};

export const singleFileOnly = (
  state: boolean = false,
  action: Action<any>
): boolean => {
  switch (action.type) {
    case SET_SINGLE_FILE_ONLY:
      return true;
    default:
      return state;
  }
};
