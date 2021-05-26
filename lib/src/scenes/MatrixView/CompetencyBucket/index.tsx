import React, { useCallback, useState } from "react";
import { Element, RowName } from "../../../models";
import styled from '@emotion/styled';
import EXPAND_COLLAPSE_ICON from '../../../../res/down_caret.png';
import { MatrixItem } from '../MatrixItem';
import { isDarkMode } from '../../../helpers/styles';

export type CompetencyBucketProps = {
  competencies: Element[];
  row: RowName;
  origin: 'other' |  RowName;
  opacity: number;
};

export const CompetencyBucket: React.FC<CompetencyBucketProps> = ({
  competencies,
  row,
  origin,
  opacity,
}) => {
  
  const header = getHeader(origin, row, competencies.length);
  const showHeader = (origin === 'other');

  const [isExpanded, setIsExpanded] = useState(origin !== 'other');

  const onClick = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const onKeyDown = useCallback(
    (event) => {
      if (event.keyCode === 32 || event.keyCode === 13) {
        setIsExpanded(!isExpanded);
        event.preventDefault();
      }
    },
    [isExpanded]
  );

  return (
    <StyledBucket
      isDarkMode={isDarkMode}
      className={!isExpanded ? "collapsed" : ""}
      style={{ opacity }}
    >
      {showHeader && (
        <div
          className="header"
          onClick={onClick}
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          <img alt="expand or collapse bucket" src={EXPAND_COLLAPSE_ICON} />
          <span>{header}</span>
        </div>
      )}
      <ul className="hiddenCompetencies">
        {competencies.map((c, idx) => (
          <MatrixItem key={`matrix-item-${row}-${c.id}`} element={c} row={row} origin={origin} idx={idx} />
        ))}
      </ul>
    </StyledBucket>
  );
};


const getHeader = (origin: 'other' | RowName, row: RowName, length: number) => {
  switch (origin) {

    case 'other':
      return `${length} from previous levels`;

    default:
      return row;
  }
}

const StyledBucket = styled.div<{isDarkMode: boolean}>`
  font-size: 0.9rem;
  border: none;

  .header {
    margin-bottom: 1rem;
    cursor: pointer;
    display: flex;

    img {
      height: 1rem;
      width: 1rem;
      margin-right: 0.25rem;
      transform-origin: 50% 50%;
      transform: rotate(180deg);
      filter: ${p => p.isDarkMode ? 'invert(1)' : 'incert(0)'}
    }
  }

  .header:empty {
    display: none;
  }

  .hiddenCompetencies {
    margin: 0;
    padding: 0;
    margin-bottom: 0.5rem;
  }

  &.collapsed .hiddenCompetencies {
    display: none;
  }

  &.collapsed img {
    transform: rotate(0deg);
  }
`;