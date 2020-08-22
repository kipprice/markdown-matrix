import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DisplayModeFilter } from "./DisplayMode";
import { RowFilters } from "./RowFilters";
import EXPAND_COLLAPSE_ICON from '../../../res/down_caret.png';
import { ColumnFilters } from "./ColumnFilters";
import { UploadButton } from "../UploadButton";
import { selectHasElements } from "../../selectors/elements";
import { ClearButton } from "./ClearButton";
import { DiffToggle } from './DiffToggle';
import { OptionType } from '../../models';
import styled from '@emotion/styled';
import { fontFamilies, colors } from '../../helpers/styles';


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
    <StyledFilterBar c={colors} f={fontFamilies} className={isCollapsed ? "collapsed" : ""}>
      {!isCollapsed && 
        <>
        <h2 className="subtitle">{subtitle}</h2>
        <h1 className="title">{title}</h1>

        {hasCompetencies && 
          <>
            { enabledOptions.includes('displayMode') && <DisplayModeFilter />}
            { enabledOptions.includes('filters') && 
              <>
              <RowFilters />
              <ColumnFilters />
              </>
            }
            
            { enabledOptions.includes('diff') && <DiffToggle /> }
          </>
        }
        

        {hasCompetencies && (
          <div className="upload">
            {enabledOptions.includes('upload') && <UploadButton theme="light" label="Upload Another File" />}
            <ClearButton />
          </div>
        )}

        </>}

        <button
          title="collapse the sidebar"
          className="collapse"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <img aria-hidden="true" src={EXPAND_COLLAPSE_ICON}></img>
        </button>
      
    </StyledFilterBar>
  );
};

const StyledFilterBar = styled.div<{ c: typeof colors, f: typeof fontFamilies }>`
  height: 100%;
  background-color: ${p => p.c.dark};
  font-family: ${p => p.f.bodyFont};
  color: ${p => p.c.light};
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 0;
  min-width: 14vw;

  &.collapsed {
    max-width: 4rem;
    min-width: 2rem;

    .label,
    .title,
    .subtitle,
    .levelFilter,
    .displayMode,
    .upload {
      display: none;
    }

    .collapse img {
      transform: rotate(-90deg);
    }
  }

  .label {
    margin-bottom: 0.25rem;
    font-size: 0.8rem;
    opacity: 0.8;
    font-family: ${p => p.f.headerFont};
  }

  .title {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: 1.2rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 0.7rem;
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
  }

  .collapse {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: none;
    background-color: ${p => p.c.dark};
    position: absolute;
    left: calc(100% - 1.5rem);
    top: -1px;
    cursor: pointer;
    //box-shadow: 0 0 0 3px ${p => p.c.light};

    &:focus,
    &:hover {
      outline: none;
      box-shadow: 0 0 0 2px ${p => p.c.light}, 0 0 0 4px ${p => p.c.dark};
    }

    img {
      width: 100%;
      height: 100%;
      transform-origin: 50% 50%;
      transform: rotate(90deg);
      filter: invert(1);
    }
  }

  h1, h2 {
    font-family: ${p => p.f.headerFont};
  }

  .upload {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 0.8rem;
    padding-bottom: 1rem;
    padding: 1rem 0.5rem;
    box-sizing: border-box;

    label {
      flex-grow: 1;
      margin-right: 1rem;
    }
  }
`;