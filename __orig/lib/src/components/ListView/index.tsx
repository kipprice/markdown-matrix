import React from "react";
import { useSelector } from "react-redux";
import { selectRows } from "../../selectors/rows";
import "./styles.scss";
import { selectDisplayMode } from "../../selectors/filters";
import { ListGroup } from "./ListGroup";

export const ListView: React.FC = () => {
  const rows = useSelector(selectRows);
  const displayMode = useSelector(selectDisplayMode);

  if (displayMode !== "list") {
    return null;
  }

  return (
    <div className="list">
      {[...rows].map((l) => (
        <ListGroup key={l} row={l} />
      ))}
    </div>
  );
};
