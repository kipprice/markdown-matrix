import React, { useCallback, useState } from "react";
import { Element, RowName } from "../../../models";
import "./styles.scss";
import cx from "classnames";
import { EXPAND_COLLAPSE_ICON } from "../../../helpers/constants";
import { MatrixItem } from '../MatrixItem';

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
    <div
      className={cx("competencyBucket", !isExpanded && "collapsed")}
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
        {competencies.map((c) => (
          <MatrixItem element={c} row={row} origin={origin} />
        ))}
      </ul>
    </div>
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