import { State, CompetencyId, Similarity, Competency } from '../models';
import { similarityScore } from '../helpers/buildSimilarityGraph';
import { Dispatch } from 'redux';
import { createSimilarityAction } from '../reducers/similarityGraph';

const SIMILARITY_THRESHOLD = 70;

export const parseSimilarities = () => {
    return async (dispatch: Dispatch<any>, getState: () => State) => {
        const { competencies } = getState();
        const allCompetencyKeys = Object.keys(competencies);

        const allPomises = []
        for (let c of allCompetencyKeys) {
            allPomises.push(wait(0).then(() => {
                return findSimilarities(c, allCompetencyKeys)
            }))
        }
        const results = await Promise.all(allPomises);

        const out: Record<CompetencyId, Similarity[]> = {};
        for (let r of results) {
            out[r.value] = r.similarities
        }

        const action = createSimilarityAction(out)
        dispatch(action);
    }
}

const findSimilarities = (value: CompetencyId, allCompetencies: CompetencyId[]) => {
    const out = [];

    for (let c of allCompetencies) {
        const { score, differences, splitBy } = similarityScore(value, c);
        if (score < SIMILARITY_THRESHOLD || score === 100) { continue; }

        out.push({ value: c, score, differences, splitBy })
    }

    return { value, similarities: out};
}

export const wait = (timeoutInMs: number) => {
    return new Promise<any>((resolve) => {
        window.setTimeout(() => resolve(), timeoutInMs)
    })
}

function* generateSimilarities() {
    // TODO: parse this
}