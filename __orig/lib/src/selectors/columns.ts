import { State, ColumnName } from '../models';

export const selectColumns = (state: State) => state.columns;

export const selectColumnIndex = (state: State, column: ColumnName) => {
    const { columns } = state;
    const cIdx = [...columns].indexOf(column);
    return cIdx;
}
