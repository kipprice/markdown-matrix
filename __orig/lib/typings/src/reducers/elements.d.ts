import { Element, ElementId } from "../models";
import type { Action } from "redux";
export declare const ADD_ELEMENTS = "ADD_ELEMENTS";
export declare const CLEAR_ELEMENTS = "CLEAR_ELEMENTS";
export declare type ElementsAction = {
    type: typeof ADD_ELEMENTS;
    elements: Record<ElementId, Element>;
};
export declare const createElementsAction: (elements: Record<ElementId, Element>) => ElementsAction;
export declare const elements: (state: Record<string, Element> | undefined, action: Action<any>) => Record<ElementId, Element>;
