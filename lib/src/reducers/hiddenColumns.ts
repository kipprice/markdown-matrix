import { ColumnName } from '../models';
import type { Action } from 'redux';

export const TOGGLE_COLUMN = 'TOGGLE_COLUMN';
export const CLEAR_COLUMN_FILTERS = 'CLEAR_COLUMN_FILTERS';

export type HiddenColumnsAction = {
    type: typeof TOGGLE_COLUMN;
    column: ColumnName;
};

export const createHiddenColumnsAction = (column: ColumnName) => {
    return {
        type: TOGGLE_COLUMN,
        column
    };
};

export const hiddenColumns = (
    hiddenColumns: Set<ColumnName> = new Set(),
    action: Action<any>
): Set<ColumnName> => {
    switch (action.type) {

        case TOGGLE_COLUMN:
            return toggleColumn(
                hiddenColumns,
                (action as HiddenColumnsAction).column
            );

        case CLEAR_COLUMN_FILTERS:
            return new Set();

        default:
            return hiddenColumns;
    }
};

const toggleColumn = (
    hiddenColumns: Set<ColumnName>,
    column: ColumnName
) => {
    const out = new Set(hiddenColumns);
    if (hiddenColumns.has(column)) {
        out.delete(column);
    } else {
        out.add(column);
    }
    return out;
};
