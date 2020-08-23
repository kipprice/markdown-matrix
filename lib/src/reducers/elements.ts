import { Element, ElementId } from "../models";
import type { Action } from "redux";

export const ADD_ELEMENTS = "ADD_ELEMENTS";
export const CLEAR_ELEMENTS = "CLEAR_ELEMENTS";

export type ElementsAction = {
  type: typeof ADD_ELEMENTS;
  elements: Record<ElementId, Element>;
};

export const createElementsAction = (
  elements: Record<ElementId, Element>
): ElementsAction => {
  return {
    type: ADD_ELEMENTS,
    elements,
  };
};

export const elements = (
  state: Record<ElementId, Element> = {},
  action: Action<any>
): Record<ElementId, Element> => {
  switch (action.type) {

    case ADD_ELEMENTS:
      const elemAction = action as ElementsAction;
      return updateElements(state, elemAction.elements)

    case CLEAR_ELEMENTS:
      return {};

    default:
      return state;
  }
};


const updateElements = (currentElements: Record<ElementId, Element>, newElements: Record<ElementId, Element>) => {
  const out = { ...currentElements };
      
      for (let id in newElements) {

        // if this element already exists, 
        // update the aspects that may be
        // different
        if (out[id]) {

          out[id].belongsToRows = [ 
            ...out[id].belongsToRows, 
            ...newElements[id].belongsToRows 
          ]

        // otherwise just add this competency in
        } else {
          out[id] = newElements[id]
        }
      }

      return out;
}
