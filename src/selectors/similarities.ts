import { State } from 'models';
// import { similarityScore } from '../helpers/buildSimilarityGraph';

export const selectSimilarValues = (state: State, value: string) => {
    return state.similarityGraph[value] || [];
}