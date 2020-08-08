import { Competency, CompetencyId } from "../models";
import type { Action } from "redux";

export const ADD_COMPETENCIES = "ADD_COMPETENCIES";
export const CLEAR_COMPETENCIES = "CLEAR_COMPETENCIES";

export type CompetenciesAction = {
  type: typeof ADD_COMPETENCIES;
  competencies: Record<CompetencyId, Competency>;
};

export const createCompetencyAction = (
  competencies: Record<CompetencyId, Competency>
) => {
  return {
    type: ADD_COMPETENCIES,
    competencies,
  };
};

export const competencies = (
  competencies: Record<CompetencyId, Competency> = {},
  action: Action<any>
) => {
  switch (action.type) {
    case ADD_COMPETENCIES:
      const compAction = action as CompetenciesAction;

      const out = { ...competencies };

      const newComps = compAction.competencies;
      
      for (let cId in newComps) {
        if (out[cId]) {
          out[cId].levels = [ 
            ...out[cId].levels, 
            ...newComps[cId].levels 
          ]
        } else {
          out[cId] = newComps[cId]
        }
      }

      return out;

    case CLEAR_COMPETENCIES:
      return {};
    default:
      return competencies;
  }
};
