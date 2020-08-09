import React from "react";
import { useSelector } from "react-redux";
import { ColumnName, RowName, State } from "../../../models";
import { selectElementsForRowAndColumn } from "../../../selectors";
import { bucketBySpecificRow, getOpacity } from "../../../helpers";
import { CompetencyBucket } from "../CompetencyBucket";
import "./styles.scss";

export type MatrixCellProps = {
  column: ColumnName;
  row: RowName;
};

export const MatrixCell: React.FC<MatrixCellProps> = ({ column, row }) => {
  const elements = useSelector((s: State) =>
    selectElementsForRowAndColumn(s, row, column)
  );

  const buckets = bucketBySpecificRow(elements, row);

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
            key={`bucket-${column}-${row}-${b.origin}`}
            row={row}
            opacity={opacity}
          />
        );
      })}
    </div>
  );
};
