import React from "react";
import { Category, Level, State } from "../../../models";
import { selectCompetenciesForLevelAndCategory } from "../../../selectors/competencies";
import { useSelector } from "react-redux";
import { bucketBySpecificLevel } from "../../../helpers/bucketer";
import { CompetencyBucket } from "../CompetencyBucket";
import "./styles.scss";
import { getOpacity } from "../../../helpers/colors";
import { selectSimilarityGraph } from '../../../selectors/similarities';

export type MatrixCellProps = {
  category: Category;
  level: Level;
};

export const MatrixCell: React.FC<MatrixCellProps> = ({ category, level }) => {
  const competencies = useSelector((s: State) =>
    selectCompetenciesForLevelAndCategory(s, level, category)
  );
  const similarityGraph = useSelector(selectSimilarityGraph);

  const buckets = bucketBySpecificLevel(competencies, level, similarityGraph);

  return (
    <div className="matrixCompetencies">
      {buckets.map((b) => {
        if (!b) {
          return null;
        }
        const opacity = getOpacity(b.origin);
        return (
          <CompetencyBucket
            {...b}
            key={`bucket-${category}-${level}-${b.origin}`}
            level={level}
            opacity={opacity}
          />
        );
      })}
    </div>
  );
};
