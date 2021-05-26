
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


export const SPECIFIC_DISABLED_FOR_COLLAPSING = "SPECIFIC_DISABLED_FOR_COLLAPSING";

export type SpecificDisabledForCollapsing = {
  type: typeof SPECIFIC_DISABLED_FOR_COLLAPSING;
};

export const createSpecificDisabledForCollapsingAction = (specifics: string[]) => {
  return {
    type: SPECIFIC_DISABLED_FOR_COLLAPSING,
    specifics
  }
}

export const specificDisabledForCollapsing = (
  state: string[] = [],
  action: Action<any>
): string[] => {
  switch (action.type) {
    case SPECIFIC_DISABLED_FOR_COLLAPSING:
      return [...(action as any).specifics];
    default:
      return state;
  }
}
