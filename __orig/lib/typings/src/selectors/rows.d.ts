import { State, RowName } from '../models';
export declare const selectRows: (state: State) => Set<string>;
export declare const selectRowIndex: (state: State, row: RowName) => number;
