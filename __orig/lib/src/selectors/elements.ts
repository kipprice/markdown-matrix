import { State, ElementId, ColumnName, RowName } from "../models";

/**
 * selectElements
 * ----------------------------------------------------------------------------
 * get all elemensts that have been loaded
 */
export const selectElements = (state: State) => state.elements;

/**
 * selectHasElements
 * ----------------------------------------------------------------------------
 * check if there are elements that have been loaded
 */
export const selectHasElements = (state: State) => {
  return Object.keys(state.elements).length !== 0;
};

/**
 * selectElement
 * ----------------------------------------------------------------------------
 * find a specific element corresponding to the specified ID
 */
export const selectElement = (state: State, id: ElementId) => {
  return state.elements[id];
};

/**
 * selectElementsForColumn
 * ----------------------------------------------------------------------------
 * find all elements that correspond to the specified column
 */
export const selectElementsForColumn = (
  state: State,
  column: ColumnName
) => {
  const { elements } = state;
  const out = [];

  for (let key in elements) {
    const comp = elements[key];
    if (comp.column === column) {
      out.push(comp);
    }
  }

  return out;
};

/**
 * selectElementsForRow
 * ----------------------------------------------------------------------------
 * find all elements that correspond to the specified row
 */
export const selectElementsForRow = (state: State, row: RowName) => {
  const { elements } = state;
  const out = [];

  for (let key in elements) {
    const comp = elements[key];
    if (comp.belongsToRows.includes(row)) {
      out.push(comp);
    }
  }

  return out;
};

/**
 * selectElementsForRowAndColumn
 * ----------------------------------------------------------------------------
 * find all elements that correspond to the specified row and column
 */
export const selectElementsForRowAndColumn = (
  state: State,
  row: RowName,
  column: ColumnName
) => {
  const { elements } = state;
  const out = [];

  for (let key in elements) {
    const comp = elements[key];
    if (comp.column === column) {
      if (comp.belongsToRows.includes(row)) {
        out.push(comp);
      }
    }
  }

  return out;
};
