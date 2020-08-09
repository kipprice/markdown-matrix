import { State, RowName } from '../models';

export const selectRows = (state: State) => state.rows;

export const selectRowIndex = (state: State, row: RowName) => {
    const { rows } = state;
    const lIdx = [...rows].indexOf(row);
    return lIdx;
}