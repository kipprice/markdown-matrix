import {
  loadFile
} from "../helpers/loadFile";
import { parseFile } from "../helpers/parseFile";
import {
  createLevelAction,
  createCategoryAction,
  createCompetencyAction,
  createFilterAction,
} from "../reducers";
import type { Dispatch } from "react";
import { parseSimilarities } from './similarities';


const parseFileIntoState = (fileContents: string, dispatch: Dispatch<any>, hideByDefault?: boolean) => {
  const parsed = parseFile(fileContents);

  dispatch(createLevelAction(parsed.levels));
  dispatch(createCategoryAction(parsed.categories));
  dispatch(createCompetencyAction(parsed.competencies));

  if (!hideByDefault) { return; }
  for (let l of parsed.levels) {
    dispatch(createFilterAction(l, 'HIDE_LEVEL'));
  }

}

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
