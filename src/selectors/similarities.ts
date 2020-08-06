import { State } from 'models';
import { similarityScore } from '../helpers/buildSimilarityGraph';

const SIMILARITY_THRESHOLD = 70;

export const selectSimilarValues = (state: State, value: string) => {
    const allCompetencies = Object.keys(state.competencies);
    const out = [];

    for (let c of allCompetencies) {
        const { score, differences, splitBy } = similarityScore(value, c);
        if (score < SIMILARITY_THRESHOLD || score === 100) { continue; }

        out.push({ value: c, score, differences, splitBy })
    }

    return out;
}