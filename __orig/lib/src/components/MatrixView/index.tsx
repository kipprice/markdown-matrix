import React from "react";
import cx from "classnames";
import { useSelector } from "react-redux";
import { 
  selectDisplayMode, 
  selectVisibleColumns,
  selectVisibleRows 
} from "../../selectors";
import { MatrixLabel } from "./MatrixLabel";
import { MatrixCell } from "./MatrixCell";
import "./styles.scss";

export const MatrixView: React.FC = () => {
  const curDisplayMode = useSelector(selectDisplayMode);
  const columns = useSelector(selectVisibleColumns);
  const rows = useSelector(selectVisibleRows);

  const children = [<span key="empty" className="empty" />];
  for (let col of columns) {
    children.push(
      <MatrixLabel key={`matrixlabel-${col}`} label={col} className="top" />
    );
  }

  for (let row of rows) {
    children.push(
      <MatrixLabel key={`matrixlabel-${row}`} label={row} className="left" />
    );

    for (let col of columns) {
      children.push(
        <MatrixCell key={`matrixcell-${row}-${col}`} column={col} row={row} />
      );
    }
  }

  return (
    <div
      className={cx(curDisplayMode === "matrix" ? "matrix" : "hidden")}
      style={{
        gridTemplateColumns: `minmax(2rem, 10rem) repeat(${columns.length}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};
