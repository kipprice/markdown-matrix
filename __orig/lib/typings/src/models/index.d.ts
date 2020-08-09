export declare type RowName = string;
export declare type ColumnName = string;
export declare type DisplayMode = 'list' | 'matrix' | 'none';
export declare type OptionType = 'upload' | 'filters' | 'diff' | 'displayMode';
export declare type Theme = {
    light: string;
    dark: string;
    darkTheme: string;
    lightTheme: string;
    headerFont: string;
    bodyFont: string;
};
export declare type ElementId = string;
export declare type Element = {
    id: ElementId;
    name: string;
    column: ColumnName;
    belongsToRows: RowName[];
    originRow: RowName;
};
export declare type Similarity = {
    similarElement: Element;
    score: number;
    differences: string[];
    splitBy: string | RegExp;
};
export declare type State = {
    columns: Set<ColumnName>;
    rows: Set<RowName>;
    elements: Record<ElementId, Element>;
    hiddenRows: Set<RowName>;
    hiddenColumns: Set<ColumnName>;
    displayMode: DisplayMode;
    enableDiffs: boolean;
    similarityGraph: Record<ElementId, Similarity[]>;
};
