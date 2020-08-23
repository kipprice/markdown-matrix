import { RowName } from 'models';
import type { Action } from 'redux';

export const HIDE_ROW = 'HIDE_ROW';
export const SHOW_ROW = 'SHOW_ROW';
export const TOGGLE_ROW = 'TOGGLE_ROW';
export const CLEAR_ROW_FILTERS = 'CLEAR_ROW_FILTERS';

export type RowFilterAction = {
    type:
        | typeof HIDE_ROW
        | typeof SHOW_ROW
        | typeof TOGGLE_ROW
        | typeof CLEAR_ROW_FILTERS;
    row: RowName;
};

export const createHiddenRowsAction = (
    row: RowName,
    type: typeof HIDE_ROW | typeof SHOW_ROW | typeof TOGGLE_ROW
): RowFilterAction => {
    return {
        type,
        row,
    };
};

export const hiddenRows = (
    hiddenRows: Set<RowName> = new Set(),
    action: Action<any>
): Set<RowName> => {
    switch (action.type) {
        case HIDE_ROW:
            return hideRow(hiddenRows, (action as RowFilterAction).row);

        case SHOW_ROW:
            return showRow(hiddenRows, (action as RowFilterAction).row);

        case TOGGLE_ROW:
            return toggleRow(hiddenRows, (action as RowFilterAction).row);

        case CLEAR_ROW_FILTERS:
            return new Set();

        default:
            return hiddenRows;
    }
};

const hideRow = (hiddenRows: Set<RowName>, rowToHide: RowName) => {
    const out = new Set(hiddenRows);
    out.add(rowToHide);
    return out;
};

const showRow = (hiddenRows: Set<RowName>, rowToShow: RowName) => {
    const out = new Set(hiddenRows);
    out.delete(rowToShow);
    return out;
};

const toggleRow = (hiddenRows: Set<RowName>, rowToToggle: RowName) => {
    if (hiddenRows.has(rowToToggle)) {
        return showRow(hiddenRows, rowToToggle);
    } else {
        return hideRow(hiddenRows, rowToToggle);
    }
};
