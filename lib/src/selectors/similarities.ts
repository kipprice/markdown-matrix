import { State, ElementId, RowName } from '../models';
import { SortOrderEnum } from '../helpers/directionality';

/**
 * selectSimilarElements
 * ----------------------------------------------------------------------------
 * find all of the elements that are similar to the provided element
 */
export const selectSimilarElements = (state: State, id: ElementId) => {
    if (!state.enableDiffs) { return []; }

    const similarities = state.similarityGraph[id] || [];
    const out = similarities.sort((a, b) => {
        if (a.score > b.score) { return SortOrderEnum.CORRECT_ORDER; }
        if (a.score < b.score) { return SortOrderEnum.INCORRECT_ORDER; }
        return SortOrderEnum.SAME;
    })

    return out;
}

/**
 * selectSimilarOriginRows
 * ----------------------------------------------------------------------------
 * find the origin rows of similar elements
 */
export const selectSimilarOriginRows = (state: State, competencyId: ElementId, currentRow: RowName) => {
    if (!state.enableDiffs) { return []; }
    
    const similarities = selectSimilarElements(state, competencyId);

    const out = [];
    for (let s of similarities) {
        if (!s.similarElement || !s.similarElement.originRow) { return; }
        if (s.similarElement.originRow !== currentRow) {
            out.push(s.similarElement.originRow);
        }
    }

    return out;
}

/**
 * selectSimilarityGraph
 * ----------------------------------------------------------------------------
 * find all of the similarities across all of the elements
 */
export const selectSimilarityGraph = (state: State) => {
    return state.similarityGraph;
}