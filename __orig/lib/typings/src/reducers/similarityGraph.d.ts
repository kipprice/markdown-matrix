import { Similarity, ElementId } from '../models';
import type { Action } from 'redux';
export declare const ADD_SIMILARITIES = "ADD_SIMILARITIES";
export declare type SimilarityAction = {
    similarities: Record<ElementId, Similarity[]>;
    type: typeof ADD_SIMILARITIES;
};
export declare const createSimilarityAction: (similarities: Record<ElementId, Similarity[]>) => {
    type: string;
    similarities: Record<string, Similarity[]>;
};
export declare const similarityGraph: (state: Record<string, Similarity[]> | undefined, action: Action<any>) => Record<ElementId, Similarity[]>;
