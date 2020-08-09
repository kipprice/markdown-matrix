export declare type LevenshteinDiffType = 'ø' | 's' | 'd' | 'a';
export declare const similarityScore: (strA: string, strB: string) => {
    score: number;
    distance: number;
    splitBy: string | RegExp;
    differences: LevenshteinDiffType[];
};
/**
 * levenshtein distance
 * ----------------------------------------------------------------------------
 * generic levenshtein distance function that takes into accounts things that
 * are similar but not exactly the same for purposes of trying to render those
 * to the
 */
export declare const levenshteinDistance: (strA: string[], strB: string[]) => {
    distance: number;
    differences: LevenshteinDiffType[];
};
export declare const calculateLetterDiff: (letterA: string, letterB: string) => number;
export declare const calculateMinPastDiff: (x: number, y: number, matrix: number[][]) => number;
export declare const findDifferences: (matrix: number[][], startPoint: number[]) => LevenshteinDiffType[];
