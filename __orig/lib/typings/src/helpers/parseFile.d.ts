import { State } from "../models";
declare type ParseLineState = Pick<State, 'columns' | 'rows' | 'elements'>;
export declare const parseFile: (fileContents: string) => ParseLineState;
export {};
