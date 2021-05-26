export type RowName = string;
export type ColumnName = string;

export type DisplayMode = "list" | "matrix" | "none";
export type OptionType = "upload" | "filters" | "diff" | "displayMode";

export type Theme = {
  /** if true, reverses the standard ways colors are used */
  isDarkMode?: boolean;

  /** the primary background color to use for light areas of the application */
  light?: string;

  /** the primary background color to use for dark areas of the application */
  dark?: string;

  /** the accent color to use on light backgrounds */
  darkTheme?: string;

  /** the accent color to use on dark backgrounds */
  lightTheme?: string;

  /** the font family to use for all header text */
  headerFont?: string;

  /** the font family to use for all body text */
  bodyFont?: string;
};

export type ElementId = string;

export type Element = {
  id: ElementId;
  name: string;
  column: ColumnName;
  belongsToRows: RowName[];
  originRow: RowName;
};

export type Similarity = {
  similarElement: Element;
  score: number;
  differences: string[];
  splitBy: string | RegExp;
};

export type State = {
<<<<<<< Updated upstream
  columns: Set<ColumnName>;
  rows: Set<RowName>;
  elements: Record<ElementId, Element>;
=======
    columns: Set<ColumnName>;
    rows: Set<RowName>;
    elements: Record<ElementId, Element>;
    
    hiddenRows: Set<RowName>;
    hiddenColumns: Set<ColumnName>;
    displayMode: DisplayMode;
    enableDiffs: boolean;
    disableCollapsing: boolean;
    specificDisabledForCollapsing: string[];
    renderHtml: boolean;
>>>>>>> Stashed changes

  hiddenRows: Set<RowName>;
  hiddenColumns: Set<ColumnName>;
  displayMode: DisplayMode;
  enableDiffs: boolean;
  disableCollapsing: boolean;
  singleFileOnly: boolean;
  renderHtml: boolean;

  similarityGraph: Record<ElementId, Similarity[]>;
};

export type Context = {
    currentRow?: RowName;
    idx?: number;
}
