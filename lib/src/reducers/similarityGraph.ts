import { Similarity, ElementId } from '../models';
import type { Action } from 'redux';

export const ADD_SIMILARITIES = 'ADD_SIMILARITIES';

export type SimilarityAction = { 
    similarities: Record<ElementId, Similarity[]>;
    type: typeof ADD_SIMILARITIES
}

export const createSimilarityAction = (similarities: Record<ElementId, Similarity[]>) => {
    return {
        type: ADD_SIMILARITIES,
        similarities
    }
}

export const similarityGraph = (state: Record<ElementId, Similarity[]> = {}, action: Action<any>): Record<ElementId, Similarity[]> => {
    switch (action.type) {
        case ADD_SIMILARITIES:
            const { similarities } = action as SimilarityAction;
            return { ...state, ...similarities }
        default:
            return state;
    }
}