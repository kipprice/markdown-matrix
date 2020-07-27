import React, { useState } from "react";
import "./styles.scss";
import { DisplayModeFilter } from "./DisplayMode";
import { LevelFilters } from "./LevelFilters";
import { EXPAND_COLLAPSE_ICON } from "../../helpers/constants";
import cx from "classnames";
import { CategoryFilters } from "./CategoryFilters";
import { UploadButton } from "../UploadButton";
import { useSelector } from "react-redux";
import { selectHasCompetencies } from "../../selectors/competencies";
import { ClearButton } from "./ClearButton";

export const FilterBar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const hasCompetencies = useSelector(selectHasCompetencies);

  return (
    <div className={cx("filterBar", isCollapsed && "collapsed")}>
      <h2 className="subtitle">Markdown-To-Matrix</h2>
      <h1 className="title">Markdown Explorer</h1>
      <DisplayModeFilter />
      <LevelFilters />
      <CategoryFilters />
      <button
        title="collapse the sidebar"
        className="collapse"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <img aria-hidden="true" src={EXPAND_COLLAPSE_ICON}></img>
      </button>
      {hasCompetencies && (
        <div className="upload">
          <UploadButton theme="light" label="Upload Another File" />
          <ClearButton />
        </div>
      )}
    </div>
  );
};
