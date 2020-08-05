
export type LevenshteinDiffType = 'ø' | 's' | 'd' | 'a'
const MAX_STRING = 20;

export const similarityScore = (strA: string, strB: string) => {
    if (strA === strB) { return 100; }
    
    const splitBy = (strA.length > MAX_STRING || strB.length > MAX_STRING) ? /\W/ : '';

    const splitA = strA.split(splitBy);
    const splitB = strB.split(splitBy);

    const { distance } = levenshteinDistance( splitA, splitB );
    return Math.floor(100 - 100 * (( distance * 2 ) / (splitA.length + splitB.length)));
}


/**
 * levenshtein distance
 * ----------------------------------------------------------------------------
 * generic levenshtein distance function that takes into accounts things that 
 * are similar but not exactly the same for purposes of trying to render those
 * to the 
 */
export const levenshteinDistance = (strA: string[], strB: string[]) => {
    if (!strA || !strB) { 
        return { 
            distance: Math.max(strA.length, strB.length),
            differences: [] // TODO: fill out
        }; 
    }

    const matrix: number[][] = [];

    for (let aIdx = 0; aIdx < strA.length; aIdx += 1) {

        // initialize the sub array
        matrix[aIdx] = [];

        for (let bIdx = 0; bIdx < strB.length; bIdx += 1) {

            const myDiff = calculateLetterDiff(strA[aIdx], strB[bIdx]);
            const minPastDiff = calculateMinPastDiff(aIdx, bIdx, matrix);

            matrix[aIdx][bIdx] = (myDiff + minPastDiff);
        }
    }

    // generate the differences by traversing the matrix backwards
    const differences = findDifferences(matrix, [strA.length - 1, strB.length - 1]); 

    return {
        distance: matrix[strA.length - 1][strB.length - 1],
        differences
    }


}

export const calculateLetterDiff = (letterA: string, letterB: string): number => {
    return (letterA === letterB ? 0 : 1);
}

export const calculateMinPastDiff = (x: number, y: number, matrix: number[][]) => {
    const points = [[0, -1], [-1, 0], [-1, -1]];

    const diffs: number[] = [];

    for (let pIdx = 0; pIdx < points.length; pIdx += 1) {

        const [a, b] = points[pIdx];
        const row = matrix[x + a];
        if (!row) { continue; }

        const value = row[y + b];
        if (value === undefined) { continue; }

        diffs.push(value);

    }

    if (diffs.length === 0) { diffs.push(0) }

    return Math.min(...diffs);
}

export const findDifferences = (matrix: number[][], startPoint: number[]): LevenshteinDiffType[] => {
    const out: LevenshteinDiffType[] = [];
    let [a, b] = startPoint;

    const points = [[0, -1], [-1, 0], [-1, -1]];
    const types: LevenshteinDiffType[] = [ 'd', 'a', 's' ];

    while (a >= 0 || b >= 0) {

        const curValue = matrix[a][b];

        let min = -1;
        let minType: LevenshteinDiffType = curValue === 0 ? 'ø' : 's';
        let minPoint = [-1, -1];

        

        const typeCounts: Partial<Record<LevenshteinDiffType, number>> = {};

        // find the min point and type
        for (let pIdx = 0; pIdx < points.length; pIdx += 1) {
            const [pA, pB] = points[pIdx];

            const val = getMatrixValue([a + pA, b + pB], matrix);
            if (val === null) { continue; }

            if (min === -1 || val < min) {
                min = val;
                minType = types[pIdx];
                minPoint = [pA, pB];
            } 
            
            typeCounts[types[pIdx]] = val;

        }

        // if there is an option where there was no difference
        // then swap to the diagonal approach
        if (min === curValue && min === typeCounts['s']) {
            minType = 'ø';
            minPoint = [-1, -1];
        }

        // update the point
        a += minPoint[0];
        b += minPoint[1]

        // update the out array
        out.push(minType);
    }


    return out.reverse();
}

const getMatrixValue = (point: number[], matrix: number[][]) => {
    const [a, b] = point;
    const row = matrix[a];
    if (!row) { return null; }
            
    const val = row[b];
    if (val === undefined) { return null; }

    return val;
}


/**
 * the way that levenshtein distances work is the following
 * if you want to find how different two strings are
 * e.g. string and slings
 * 
 *     s  t  r  i  n  g
 * s   0* 1* 2  3  4  5
 * l   1  1* 2* 3  4  5
 * i   2  2  2* 2* 3  4  
 * n   3  3  3  3  2* 3  
 * g   4  4  4  4  3  2*
 * s   4  5  5  5  4  3*
 * 
 * s l[sub] [del] i n g s[add]
 * s t[sub] r[add] i n g [del]
 * 
 *     s  t  r  i  n  g
 * s   ø  i  i  i  i  i
 * l   d  s  i  i  i  i
 * i   d  d  s  ø  i  i
 * n   d  d  d  d  ø  i  
 * g   d  d  d  d  d  ø
 * s   d  d  d  d  d  d
 * 
 * selected types = [d, ø, ø, ø, s, s, ø] or [d, ø, ø, ø, i, s, ø] or [d, ø, ø, ø, i, i, ø]
 */