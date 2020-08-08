import React, { useCallback, useState } from "react";
import { Competency, Level } from "../../../models";
import "./styles.scss";
import cx from "classnames";
import { EXPAND_COLLAPSE_ICON } from "../../../helpers/constants";
import { MatrixItem } from '../MatrixItem';

export type CompetencyBucketProps = {
  competencies: Competency[];
  level: Level;
  origin: 'other' | 'similar' | Level;
  opacity: number;
};

export const CompetencyBucket: React.FC<CompetencyBucketProps> = ({
  competencies,
  level,
  origin,
  opacity,
}) => {
  
  const header = getHeader(origin, level, competencies.length);
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
          <MatrixItem competency={c} level={level} origin={origin} />
        ))}
      </ul>
    </div>
  );
};


const getHeader = (origin: 'similar' | 'other' | Level, level: Level, length: number) => {
  switch (origin) {
    case 'similar':
      return `${length} similar to other competencies`;

    case 'other':
      return `${length} from previous levels`;

    default:
      return level;
  }
}