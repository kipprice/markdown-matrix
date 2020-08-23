
import type { Action } from "redux";

export const ENABLE_RENDER_HTML = "ENABLE_RENDER_HTML";

export const createEnableRenderHtmlAction = () => {
  return {
    type: ENABLE_RENDER_HTML,
  }
}

export const renderHtml = (
  state: boolean = false,
  action: Action<any>
): boolean => {
  switch (action.type) {
    case ENABLE_RENDER_HTML:
      return true;
    default:
      return state;
  }
};
