import { State, ElementId, ColumnName, RowName } from "../models";
/**
 * selectElements
 * ----------------------------------------------------------------------------
 * get all elemensts that have been loaded
 */
export declare const selectElements: (state: State) => Record<string, import("../models").Element>;
/**
 * selectHasElements
 * ----------------------------------------------------------------------------
 * check if there are elements that have been loaded
 */
export declare const selectHasElements: (state: State) => boolean;
/**
 * selectElement
 * ----------------------------------------------------------------------------
 * find a specific element corresponding to the specified ID
 */
export declare const selectElement: (state: State, id: ElementId) => import("../models").Element;
/**
 * selectElementsForColumn
 * ----------------------------------------------------------------------------
 * find all elements that correspond to the specified column
 */
export declare const selectElementsForColumn: (state: State, column: ColumnName) => import("../models").Element[];
/**
 * selectElementsForRow
 * ----------------------------------------------------------------------------
 * find all elements that correspond to the specified row
 */
export declare const selectElementsForRow: (state: State, row: RowName) => import("../models").Element[];
/**
 * selectElementsForRowAndColumn
 * ----------------------------------------------------------------------------
 * find all elements that correspond to the specified row and column
 */
export declare const selectElementsForRowAndColumn: (state: State, row: RowName, column: ColumnName) => import("../models").Element[];
