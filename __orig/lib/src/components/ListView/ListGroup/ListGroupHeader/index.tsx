import { ListGroupProps } from "..";
import React, { useCallback, KeyboardEvent } from "react";
import { useDispatch } from "react-redux";
import { createHiddenRowsAction } from "../../../../reducers";
import "./styles.scss";
import { EXPAND_COLLAPSE_ICON, EX_ICON } from "../../../../helpers/constants";

export type ListGroupHeaderProps = ListGroupProps & {
  onExpandCollapse: () => void;
};

export const ListGroupHeader = ({
  row,
  column,
  onExpandCollapse,
}: ListGroupHeaderProps) => {

  const dispatch = useDispatch();

  const onDelete = useCallback(() => {
    dispatch(createHiddenRowsAction(row, "HIDE_ROW"));
  }, [dispatch, row]);

  const onKeyDown = (event: KeyboardEvent<any>) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      onExpandCollapse();
      event.preventDefault();
    }
  };

  const collapseIcon = (
    <img
      className="caret"
      alt={`collapse the ${column || row} group`}
      src={EXPAND_COLLAPSE_ICON}
    ></img>
  );

  if (column) {
    return (
      <span
        tabIndex={0}
        className="colName"
        onClick={onExpandCollapse}
        onKeyDown={onKeyDown}
      >
        {collapseIcon}
        <h3>{column}</h3>
      </span>
    );
  }

  return (
    <span
      tabIndex={0}
      className="colName"
      onClick={onExpandCollapse}
      onKeyDown={onKeyDown}
    >
      {collapseIcon}
      <h2>{row}</h2>
      <img
        className="ex"
        alt={`hide the ${row} group`}
        src={EX_ICON}
        onClick={(e) => {
          onDelete();
          e.stopPropagation();
        }}
      ></img>
    </span>
  );
};
