import React from "react";
import { useSelector } from "react-redux";
import { ColumnName, RowName, State, Element } from "../../../models";
import { selectCollapsingDisabled, selectElementsForRowAndColumn, selectSpecificDisabledForCollapsing } from "../../../selectors";
import { bucketBySpecificRow, getOpacity } from "../../../helpers";
import { CompetencyBucket } from "../CompetencyBucket";
import styled from '@emotion/styled';
import { fontFamilies } from '../../../helpers/styles';
import { Heading } from '../../../components';

export type MatrixCellProps = {
  column: ColumnName;
  row: RowName;
};

export interface SubBucket {
  subheader: string;
  elements: Element[];
}

export const MatrixCell: React.FC<MatrixCellProps> = ({ column, row }) => {
  const elements = useSelector((s: State) =>
    selectElementsForRowAndColumn(s, row, column)
  );
  const disableCollapsing = useSelector(selectCollapsingDisabled);
  const specificDisabledCollapsing = useSelector(selectSpecificDisabledForCollapsing);

  const subBuckets = [];
  if (specificDisabledCollapsing.length === 0) {
    subBuckets.push({ subheader: '', elements: [...elements]})
  }

  if (specificDisabledCollapsing.length > 0) {
    let curBucket: SubBucket = { subheader: '', elements: []};
    for (let elem of elements) {
      console.log(elem.name)
      // ==> start a new bucket with the subheader
      if (specificDisabledCollapsing.indexOf(elem.name) !== -1) {
        if (curBucket.elements.length > 0 || curBucket.subheader) {
          subBuckets.push(curBucket)
          curBucket = { subheader: '', elements: []};
        }
        curBucket.subheader = elem.name;

      // ==> add to the elements of the section
      } else {
        curBucket.elements.push(elem)
      }
    }
    subBuckets.push(curBucket)
  }
  

  return (
    <StyledMatrixCell f={fontFamilies}>
      {subBuckets.map((sb) => {
        if (sb.subheader) { console.log(sb.subheader, sb.elements) }
        const buckets = bucketBySpecificRow(sb.elements, row, disableCollapsing);

        return <>
          {sb.subheader ? <Heading as='h4' mode='matrix' style={{fontSize: '0.8rem', fontWeight: 'bold'}}>{sb.subheader}</Heading> : null}
          {buckets.map((b) => {
            if (!b) {
              return null;
            }
            const opacity = getOpacity(b.origin);
            return (
              <CompetencyBucket
                {...b}
                key={`bucket-${column}-${row}-${b.origin}`}
                row={row}
                opacity={opacity}
              />
            );
          })}
        </>
      })}
      
    </StyledMatrixCell>
  );
};

const StyledMatrixCell = styled.div<{f: typeof fontFamilies}>`
  font-family: ${p => p.f.bodyFont};
  margin: 0;
  padding: 0;
  padding-left: 1rem;
  padding-top: 0.25rem;
`;