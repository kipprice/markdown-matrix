import { DisplayMode } from "../models";
import type { Action } from "redux";
export declare const SET_DISPLAY_MODE = "SET_DISPLAY_MODE";
export declare type DisplayModeAction = {
    displayMode: DisplayMode;
    type: typeof SET_DISPLAY_MODE;
};
export declare const createDisplayModeAction: (displayMode: DisplayMode) => {
    type: string;
    displayMode: DisplayMode;
};
export declare const displayMode: (state: "none" | "list" | "matrix" | undefined, action: Action<any>) => DisplayMode;
