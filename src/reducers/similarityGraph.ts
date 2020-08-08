import { Similarity, CompetencyId } from '../models';
import type { Action } from 'redux';

export const ADD_SIMILARITIES = 'ADD_SIMILARITIES';

export type SimilarityAction = { 
    similarities: Record<CompetencyId, Similarity[]>;
    type: typeof ADD_SIMILARITIES
}

export const createSimilarityAction = (similarities: Record<CompetencyId, Similarity[]>) => {
    return {
        type: ADD_SIMILARITIES,
        similarities
    }
}

export const similarityGraph = (state: Record<CompetencyId, Similarity[]> = {}, action: Action<any>) => {
    switch (action.type) {
        case ADD_SIMILARITIES:
            const { similarities } = action as SimilarityAction;
            return { ...state, ...similarities }
        default:
            return state;
    }
}