import type { Action } from "redux";
export declare const TOGGLE_DIFFS = "TOGGLE_DIFFS";
export declare type EnableDiffsAction = {
    type: typeof TOGGLE_DIFFS;
};
export declare const createEnableDiffsAction: () => {
    type: string;
};
export declare const enableDiffs: (state: boolean | undefined, action: Action<any>) => boolean;
