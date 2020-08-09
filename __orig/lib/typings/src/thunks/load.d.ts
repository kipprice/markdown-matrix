import type { Dispatch } from "react";
/**
 * loadFiles
 * ----------------------------------------------------------------------------
 * thunk that loads in all files specified and renders them onto the matrix
 * viewer. Can be called from file input or from manual call
 */
export declare const loadFiles: (fileUrls: string[]) => (dispatch: Dispatch<any>) => Promise<void>;
