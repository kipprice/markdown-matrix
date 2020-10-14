
import type { Action } from "redux";

export const DISABLE_COLLAPSING = "DISABLE_COLLAPSING";

export type DisableCollapsingAction = {
  type: typeof DISABLE_COLLAPSING;
};

export const createDisableCollapsingAction = () => {
  return {
    type: DISABLE_COLLAPSING,
  }
}

export const disableCollapsing = (
  state: boolean = false,
  action: Action<any>
): boolean => {
  switch (action.type) {
    case DISABLE_COLLAPSING:
      return true;
    default:
      return state;
  }
};
