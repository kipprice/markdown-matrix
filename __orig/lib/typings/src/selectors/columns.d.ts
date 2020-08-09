import { State, ColumnName } from '../models';
export declare const selectColumns: (state: State) => Set<string>;
export declare const selectColumnIndex: (state: State, column: ColumnName) => number;
