import { State, ElementId, Similarity, Element } from '../models';
import { similarityScore } from '../helpers/buildSimilarityGraph';
import { Dispatch } from 'redux';
import { createSimilarityAction } from '../reducers/similarityGraph';

const SIMILARITY_THRESHOLD = 50;

/**
 * parseSimilarities
 * ----------------------------------------------------------------------------
 * thunk that looks at all cominations of elements to find elements that are
 * similar in value
 */
export const parseSimilarities = () => {
    return async (dispatch: Dispatch<any>, getState: () => State) => {
        
        const { elements } = getState();
        const allElementKeys = Object.keys(elements);

        // load all of the similarities
        const allPomises = []
        for (let e of allElementKeys) {
            allPomises.push(wait(0).then(() => {
                return findSimilarities(e, elements)
            }))
        }
        const results = await Promise.all(allPomises);

        // loop through all of the found similarities and add the ones that are close enough
        const out: Record<ElementId, Similarity[]> = {};
        for (let r of results) {
            out[r.value] = r.similarities
        }

        dispatch(createSimilarityAction(out));
    }
}

/**
 * findSimilarities
 * ----------------------------------------------------------------------------
 * search for elements with similar content to the specified search string
 */
const findSimilarities = (value: ElementId, elements: Record<ElementId, Element>) => {
    const out: Similarity[] = [];

    const keys = Object.keys(elements);
    for (let c of keys) {
        const { score, differences, splitBy } = similarityScore(value, c);
        if (score < SIMILARITY_THRESHOLD || score === 100) { continue; }

        out.push({ 
            similarElement: elements[c], 
            score, 
            differences, 
            splitBy 
        })
    }

    return { value, similarities: out};
}

/**
 * wait
 * ----------------------------------------------------------------------------
 * promise wrapper around window.setTimeout
 */
export const wait = (timeoutInMs: number) => {
    return new Promise<any>((resolve) => {
        window.setTimeout(() => resolve(), timeoutInMs)
    })
}