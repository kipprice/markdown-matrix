import { levenshteinDistance, similarityScore } from '../buildSimilarityGraph';

describe('Levenshtein Distance', () => {
    it('calculates the distance properly', () => {
        const strA = 'cats';
        const strB = 'bat';
        const { distance } = levenshteinDistance([...strA], [...strB]);
        expect(distance).toEqual(2);
    })

    it('calculates the difference chain properly', () => {
        const strA = 'string';
        const strB = 'slings';
        const { distance, differences } = levenshteinDistance([...strA], [...strB]);
        expect(distance).toEqual(3);
        expect(differences).toMatchObject(['ø', 's', 'a', 'ø', 'ø', 'ø', 'd'])

        // TODO: think about whether this is actually correct...
    })

    it('calculates a word diff', () => {
        const strA = 'this is a sentence';
        const strB = 'this is also a sentence';

        const { distance, differences } = levenshteinDistance( strA.split(/\W/), strB.split(/\W/) )
        expect(distance).toEqual(1);
        expect(differences.join('')).toEqual('øødøø');

        // TODO: something is definitely up with the difference calculation
    })

    it('calculates completely different words', () => {
        const { distance, differences } = levenshteinDistance([...'cat'], [...'dog']);
        expect(distance).toEqual(3);
        expect(differences.join('')).toEqual('sss');
    })

})

describe('similarity score', () => {
    it('calculates for same word', () => {
        expect(similarityScore('cat', 'cat')).toEqual(100);
    })

    it('calculates for completely different words', () => {
        expect(similarityScore('cat', 'dog')).toEqual(0);
    })

    it('calculates for similar words', () => {
        expect(similarityScore('bath', 'cats')).toEqual(50)
    })

    it('calculates for longer strings', () => {
        const score = similarityScore('this is a longer sentence than the others were', 'this is also longer than the others were')

        expect(score).toEqual(76)
    })
})