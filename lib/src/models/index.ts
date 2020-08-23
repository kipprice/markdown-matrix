export type RowName = string;
export type ColumnName = string;

export type DisplayMode = 'list' | 'matrix' | 'none';
export type OptionType = 'upload' | 'filters' | 'diff' | 'displayMode';

export type Theme = {

    /** the primary background color to use for light areas of the application */
    light: string;

    /** the primary background color to use for dark areas of the application */
    dark: string;

    /** the accent color to use on light backgrounds */
    darkTheme: string;

    /** the accent color to use on dark backgrounds */
    lightTheme: string;
    
    /** the font family to use for all header text */
    headerFont: string;

    /** the font family to use for all body text */
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
    renderHtml: boolean;

    similarityGraph: Record<ElementId, Similarity[]>
} 