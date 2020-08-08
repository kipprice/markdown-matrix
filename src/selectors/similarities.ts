import { State, CompetencyId, Level } from '../models';
import { SortOrderEnum } from '../helpers/levelDirection';

export const selectSimilarValues = (state: State, competencyId: CompetencyId) => {
    if (!state.enableDiffs) { return []; }
    const similarities = state.similarityGraph[competencyId] || [];
    const out = similarities.sort((a, b) => {
        if (a.score > b.score) { return SortOrderEnum.CORRECT_ORDER; }
        if (a.score < b.score) { return SortOrderEnum.INCORRECT_ORDER; }
        return SortOrderEnum.SAME;
    })
    return out;
}

export const selectSimilarLevels = (state: State, competencyId: CompetencyId, level: Level) => {
    if (!state.enableDiffs) { return []; }
    
    const similarities = selectSimilarValues(state, competencyId);

    const out = [];
    for (let s of similarities) {
        if (!s.value || !s.value.originLevel) { return; }
        if (s.value.originLevel !== level) {
            out.push(s.value.originLevel);
        }
    }

    return out;
}

export const selectSimilarityGraph = (state: State) => {
    return state.similarityGraph;
}