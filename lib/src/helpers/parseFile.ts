import { State, ColumnName, RowName } from "../models";
import { matchColumn, matchElement, matchRow, isH2 } from "./matcher";

type ParseLineState = Pick<State, 'columns' | 'rows' | 'elements'>

type ParseLineProps = {
  state: ParseLineState;
  lastRow: string;
  lastColumn: string;
};

export const parseFile = (
  fileContents: string
): ParseLineState => {
  const lines = getLinesInFile(fileContents);

  const props: ParseLineProps = {
    state: {
      elements: {},
      rows: new Set(),
      columns: new Set(),
    },
    lastRow: "",
    lastColumn: "",
  };

  for (let line of lines) {
    parseLine(line, props);
  }

  return props.state;
};

const getLinesInFile = (fileContents: string) => {
  return fileContents.split("\n");
};

/**
 * parseLine
 * ----------------------------------------------------------------------------
 * handle getting content out of a line
 */
const parseLine = (line: string, props: ParseLineProps) => {
  const { lastRow } = props;

  // nothing to do if we aren't yet on the competencies
  const rowHeader = matchRow(line);
  if (!lastRow && !rowHeader) {
    return;
  }

  // reset if this is a header that doesn't meet criteria
  if (lastRow && isH2(line) && !rowHeader) {
    props.lastRow = "";
    return;
  }
  // if it is a row header
  if (rowHeader) {
    return parseRow(props, rowHeader);
  }

  // if this is a category, set that value here
  const columnHeader = matchColumn(line);
  if (columnHeader) {
    return parseColumn(props, columnHeader);
  }

  // if this is a competency, create it
  const element = matchElement(line);
  if (element) {
    return parseElement(element, props);
  }
};

/**
 * parseCategory
 * ----------------------------------------------------------------------------
 * parse out the content of the competency category
 */
const parseColumn = (props: ParseLineProps, column: ColumnName) => {
  const { state } = props;
  props.lastColumn = column;

  if (!state.columns.has(column)) {
    state.columns.add(column);
  }

  return;
};

/**
 * parseRow
 * ----------------------------------------------------------------------------
 * parse out the content of the competency row
 */
const parseRow = (props: ParseLineProps, row: RowName) => {
  const { state } = props;
  props.lastRow = row;

  if (!state.rows.has(row)) {
    state.rows.add(row);
  }

  return;
};

/**
 * parseCompetency
 * ----------------------------------------------------------------------------
 * parse the content of the competency itself
 */
const parseElement = (element: string, props: ParseLineProps) => {
  const { state } = props;

  if (state.elements[element]) {
    state.elements[element].belongsToRows.push(props.lastRow);
  } else {
    state.elements[element] = {
      id: element,
      name: element,
      belongsToRows: [props.lastRow],
      column: props.lastColumn,
      originRow: props.lastRow
    };
  }
};
