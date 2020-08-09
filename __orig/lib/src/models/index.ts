export type RowName = string;
export type ColumnName = string;

export type DisplayMode = 'list' | 'matrix' | 'none';
export type OptionType = 'upload' | 'filters' | 'diff' | 'displayMode';

export type Theme = {
    light: string;
    dark: string;
    darkTheme: string;
    lightTheme: string;
    
    headerFont: string;
    bodyFont: string;
};

export type ElementId = string;

export type Element = {
    id: ElementId;
    name: string;
    column: ColumnName;
    belongsToRows: RowName[];
    originRow: RowName;
}

export type Similarity = {
    similarElement: Element;
    score: number;
    differences: string[];
    splitBy: string | RegExp;
}

export type State = {
    columns: Set<ColumnName>;
    rows: Set<RowName>;
    elements: Record<ElementId, Element>;
    
    hiddenRows: Set<RowName>;
    hiddenColumns: Set<ColumnName>;
    displayMode: DisplayMode;
    enableDiffs: boolean;

    similarityGraph: Record<ElementId, Similarity[]>
} 