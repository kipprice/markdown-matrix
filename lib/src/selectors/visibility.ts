import { State, RowName, ElementId, ColumnName } from "../models";
import {
  selectElement,
  selectElementsForColumn,
  selectElementsForRowAndColumn,
} from "./elements";
import { selectColumns } from "./columns";
import { selectRows } from "./rows";

export const HIDDEN = false;
export const VISIBLE = true;

/**
 * selectRowVisibility
 * ----------------------------------------------------------------------------
 * check whether the specified row has at least one element that is currently
 * visible
 */
export const selectRowVisibility = (state: State, row: RowName) => {
  const { hiddenRows } = state;
  if (hiddenRows.has(row)) {
    return HIDDEN;
  }
  return VISIBLE;
};

/**
 * selectElementVisibility
 * ----------------------------------------------------------------------------
 * check whether the specified element is visible currently
 */
export const selectElementVisibility = (
  state: State,
  elementId: ElementId
) => {
  const competency = selectElement(state, elementId);
  for (let l of competency.belongsToRows) {
    if (selectRowVisibility(state, l) === VISIBLE) {
      return VISIBLE;
    }
  }
  return HIDDEN;
};

/**
 * selectColumnVisbility
 * ----------------------------------------------------------------------------
 * check whether the specified column has at least one element that is 
 * currently visible
 */
export const selectColumnVisibility = (
  state: State,
  column: ColumnName,
  onlyByFilter?: boolean
) => {
  const { hiddenColumns } = state;
  if (hiddenColumns.has(column)) {
    return HIDDEN;
  }
  if (onlyByFilter) {
    return VISIBLE;
  }

  const elements = selectElementsForColumn(state, column);
  for (let e of elements) {
    if (selectElementVisibility(state, e.id) === VISIBLE) {
      return VISIBLE;
    }
  }
  return HIDDEN;
};

/**
 * selectRowAndColumnVisibility
 * ----------------------------------------------------------------------------
 * check if a particular pair of row + column has any elements within the 
 * intersection that are visible
 */
export const selectRowAndColumnVisibility = (
  state: State,
  row: RowName,
  column: ColumnName
) => {
  if (!selectRowVisibility(state, row)) {
    return HIDDEN;
  }
  if (!selectColumnVisibility(state, column, true)) {
    return HIDDEN;
  }
  const elements = selectElementsForRowAndColumn(
    state,
    row,
    column
  );

  for (let e of elements) {
    if (selectElementVisibility(state, e.id) === VISIBLE) {
      return VISIBLE;
    }
  }

  return HIDDEN;
};

/**
 * selectVisibleColumns
 * ----------------------------------------------------------------------------
 * grab all of the columns that are currently visible
 */
export const selectVisibleColumns = (state: State) => {
  const columns = selectColumns(state);
  const out = [];
  for (let column of columns) {
    if (selectColumnVisibility(state, column)) {
      out.push(column);
    }
  }
  return out;
};

/**
 * selectVisibleRows
 * ----------------------------------------------------------------------------
 * grab all of the rows that are currently visible
 */
export const selectVisibleRows = (state: State) => {
  const rows = selectRows(state);
  const out = [];
  for (let row of rows) {
    if (selectRowVisibility(state, row)) {
      out.push(row);
    }
  }
  return out;
};
