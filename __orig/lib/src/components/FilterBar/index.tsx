import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DisplayModeFilter } from "./DisplayMode";
import { RowFilters } from "./RowFilters";
import { EXPAND_COLLAPSE_ICON } from "../../helpers/constants";
import cx from "classnames";
import { ColumnFilters } from "./ColumnFilters";
import { UploadButton } from "../UploadButton";
import { selectHasElements } from "../../selectors/elements";
import { ClearButton } from "./ClearButton";
import { DiffToggle } from './DiffToggle';
import { OptionType } from '../../models';
import "./styles.scss";


export type FilterBarProps = {
  title: string;
  subtitle: string;
  enabledOptions: OptionType[];
}

export const FilterBar: React.FC<FilterBarProps> = ({ title, subtitle, enabledOptions }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const hasCompetencies = useSelector(selectHasElements);

  // if no options are enabled, no point in showing the sidebar
  if (enabledOptions.length === 0) { return null;}

  return (
    <div className={cx("filterBar", isCollapsed && "collapsed")}>
      {!isCollapsed && 
        <React.Fragment>
        <h2 className="subtitle">{subtitle}</h2>
        <h1 className="title">{title}</h1>

        {hasCompetencies && 
          <React.Fragment>
            { enabledOptions.includes('displayMode') && <DisplayModeFilter />}
            { enabledOptions.includes('filters') && 
              <React.Fragment>
              <RowFilters />
              <ColumnFilters />
              </React.Fragment>
            }
            
            { enabledOptions.includes('diff') && <DiffToggle /> }
          </React.Fragment>
        }
        

        {hasCompetencies && (
          <div className="upload">
            <UploadButton theme="light" label="Upload Another File" />
            <ClearButton />
          </div>
        )}

        </React.Fragment>}

        <button
          title="collapse the sidebar"
          className="collapse"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <img aria-hidden="true" src={EXPAND_COLLAPSE_ICON}></img>
        </button>
      
    </div>
  );
};
