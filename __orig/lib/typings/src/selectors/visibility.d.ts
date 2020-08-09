import { State, RowName, ElementId, ColumnName } from "../models";
export declare const HIDDEN = false;
export declare const VISIBLE = true;
/**
 * selectRowVisibility
 * ----------------------------------------------------------------------------
 * check whether the specified row has at least one element that is currently
 * visible
 */
export declare const selectRowVisibility: (state: State, row: RowName) => boolean;
/**
 * selectElementVisibility
 * ----------------------------------------------------------------------------
 * check whether the specified element is visible currently
 */
export declare const selectElementVisibility: (state: State, elementId: ElementId) => boolean;
/**
 * selectColumnVisbility
 * ----------------------------------------------------------------------------
 * check whether the specified column has at least one element that is
 * currently visible
 */
export declare const selectColumnVisibility: (state: State, column: ColumnName, onlyByFilter?: boolean | undefined) => boolean;
/**
 * selectRowAndColumnVisibility
 * ----------------------------------------------------------------------------
 * check if a particular pair of row + column has any elements within the
 * intersection that are visible
 */
export declare const selectRowAndColumnVisibility: (state: State, row: RowName, column: ColumnName) => boolean;
/**
 * selectVisibleColumns
 * ----------------------------------------------------------------------------
 * grab all of the columns that are currently visible
 */
export declare const selectVisibleColumns: (state: State) => string[];
/**
 * selectVisibleRows
 * ----------------------------------------------------------------------------
 * grab all of the rows that are currently visible
 */
export declare const selectVisibleRows: (state: State) => string[];
