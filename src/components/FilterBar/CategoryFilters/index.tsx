import React from "react";
import { useSelector } from "react-redux";
import { CategoryFilter } from "./CategoryFilter";
import "./styles.scss";
import { selectCategories } from "../../../selectors/categories";

export const CategoryFilters = () => {
  const categories = useSelector(selectCategories);

  if (categories.size === 0) {
    return null;
  }

  return (
    <div className="filters">
      <span className="label">Visible Columns:</span>
      {[...categories].map((c) => (
        <CategoryFilter key={`categoryfilter-${c}`} category={c} />
      ))}
    </div>
  );
};
