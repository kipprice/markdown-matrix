import { State } from '../models';
import { Dispatch } from 'redux';
/**
 * parseSimilarities
 * ----------------------------------------------------------------------------
 * thunk that looks at all cominations of elements to find elements that are
 * similar in value
 */
export declare const parseSimilarities: () => (dispatch: Dispatch<any>, getState: () => State) => Promise<void>;
/**
 * wait
 * ----------------------------------------------------------------------------
 * promise wrapper around window.setTimeout
 */
export declare const wait: (timeoutInMs: number) => Promise<any>;
