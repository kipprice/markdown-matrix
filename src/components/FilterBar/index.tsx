import React from "react";
import "./styles.scss";
import { DisplayModeFilter } from "./DisplayMode";
import { LevelFilters } from "./LevelFilters";

export const FilterBar: React.FC = () => {
  return (
    <div className="filterBar">
      <div className="subtitle">Markdown-To-Matrix</div>
      <div className="title">Markdown Explorer</div>
      <DisplayModeFilter />
      <LevelFilters />
    </div>
  );
};
