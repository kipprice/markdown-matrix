import React, { useCallback, useState } from "react";
import { ColumnName, RowName, State } from "../../../models";
import cx from "classnames";
import "./styles.scss";
import { useSelector } from "react-redux";
import {
  selectRowVisibility,
  selectRowAndColumnVisibility,
  selectColumns,
  selectElementsForRowAndColumn,
} from "../../../selectors";
import { ListItem } from "../ListItem";
import { ListGroupHeader } from "./ListGroupHeader";

export type ListGroupProps = {
  column?: ColumnName;
  row: RowName;
};

export const ListGroup = ({ row, column }: ListGroupProps) => {

  const [isExpanded, setIsExpanded] = useState(true);
  const isRowVisible = useSelector((s: State) =>
    selectRowVisibility(s, row)
  );
  const isColumnVisible = useSelector((s: State) =>
    selectRowAndColumnVisibility(s, row, column || "")
  );
  const columns = useSelector(selectColumns);
  const elements = useSelector((s: State) =>
    selectElementsForRowAndColumn(s, row, column || "")
  );

  const onExpandCollapse = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <div
      className={cx(
        "column",
        (!isRowVisible || (column && !isColumnVisible)) && "hidden",
        !isExpanded && "collapsed"
      )}
    >
      {/** header */}
      <ListGroupHeader
        column={column}
        row={row}
        onExpandCollapse={onExpandCollapse}
      />

      {/** content */}
      <span className="groupChildren">
        {column
          ? elements.map((comp) => (
              <ListItem
                key={`listitem-${comp.id}`}
                row={row}
                element={comp}
              />
            ))
          : [...columns].map((cat) => (
              <ListGroup
                key={`listgroup-${row}-${cat}`}
                row={row}
                column={cat}
              />
            ))}
      </span>
    </div>
  );
};
