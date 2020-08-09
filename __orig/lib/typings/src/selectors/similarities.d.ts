import { State, ElementId, RowName } from '../models';
/**
 * selectSimilarElements
 * ----------------------------------------------------------------------------
 * find all of the elements that are similar to the provided element
 */
export declare const selectSimilarElements: (state: State, id: ElementId) => import("../models").Similarity[];
/**
 * selectSimilarOriginRows
 * ----------------------------------------------------------------------------
 * find the origin rows of similar elements
 */
export declare const selectSimilarOriginRows: (state: State, competencyId: ElementId, currentRow: RowName) => string[] | undefined;
/**
 * selectSimilarityGraph
 * ----------------------------------------------------------------------------
 * find all of the similarities across all of the elements
 */
export declare const selectSimilarityGraph: (state: State) => Record<string, import("../models").Similarity[]>;
