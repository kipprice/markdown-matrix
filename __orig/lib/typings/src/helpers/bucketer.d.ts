import { Element, RowName } from "../models";
declare type CompetencyBucket = {
    competencies: Element[];
    origin: RowName | 'other';
};
export declare const bucketBySpecificRow: (competencies: Element[], row: RowName) => CompetencyBucket[];
export {};
