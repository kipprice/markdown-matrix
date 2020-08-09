import { State } from '../models';
export declare const selectDisplayMode: (state: State) => import("../models").DisplayMode;
export declare const selectHiddenRows: (state: State) => Set<string>;
export declare const selectHiddenColumns: (state: State) => Set<string>;
export declare const selectAreDiffsEnabled: (state: State) => boolean;
