import {
  loadFile
} from "../helpers/loadFile";
import { parseFile } from "../helpers/parseFile";
import {
  createRowsAction,
  createColumnsAction,
  createElementsAction,
  createHiddenRowsAction, 
} from "../reducers";
import type { Dispatch } from "react";
import { parseSimilarities } from './similarities';


/**
 * parseFileIntoState
 * ----------------------------------------------------------------------------
 * loads the specified file, parses through it to find the patterns expected
 * of the tool, then adds it to the global store to be rendered
 */
const parseFileIntoState = (fileContents: string, dispatch: Dispatch<any>, hideByDefault?: boolean) => {
  const parsed = parseFile(fileContents);

  // send a message about the newly loaded data
  dispatch(createRowsAction(parsed.rows));
  dispatch(createColumnsAction(parsed.columns));
  dispatch(createElementsAction(parsed.elements));

  // if we are hiding these elements, hide the rows
  // unique to them
  if (!hideByDefault) { return; }
  for (let l of parsed.rows) {
    dispatch(createHiddenRowsAction(l, 'HIDE_ROW'));
  }

}

/**
 * loadFiles
 * ----------------------------------------------------------------------------
 * thunk that loads in all files specified and renders them onto the matrix
 * viewer. Can be called from file input or from manual call
 */
export const loadFiles = (fileUrls: string[]) => {
  return async (dispatch: Dispatch<any>) => {
    
    for (let fileUrl of fileUrls) {
      const loaded = await loadFile(fileUrl);
      parseFileIntoState(loaded, dispatch)
    }

    // queue up the similarity parser too
    dispatch(parseSimilarities());
  };
};
