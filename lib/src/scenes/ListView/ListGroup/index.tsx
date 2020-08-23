import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { ColumnName, RowName, State } from "../../../models";
import {
  selectColumns,
  selectElementsForRowAndColumn, selectRowAndColumnVisibility, selectRowVisibility
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
    <StyledColumn
      collapsed={!isExpanded}
      hidden={!isRowVisible || (!!column && !isColumnVisible)}
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
    </StyledColumn>
  );
};

const StyledColumn = styled.div<{ hidden: boolean; collapsed: boolean }>`
  font-size: 0.9em;
  width: 50vw;
  margin-bottom: 1em;
  ${p => p.hidden && hiddenCss}
  ${p => p.collapsed && collapsedCss}
`;

const hiddenCss = css`
  display: none;
`;

const collapsedCss = css`
  .colName img {
    transform: rotate(0deg);
  }

  .groupChildren {
    display: none;
  }
`;