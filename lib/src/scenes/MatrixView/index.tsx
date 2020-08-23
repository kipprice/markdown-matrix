import React from "react";
import styled from '@emotion/styled';
import { useSelector } from "react-redux";
import { 
  selectDisplayMode, 
  selectVisibleColumns,
  selectVisibleRows 
} from "../../selectors";
import { MatrixLabel } from "./MatrixLabel";
import { MatrixCell } from "./MatrixCell";
import { fontFamilies, colors } from '../../helpers/styles';

export const MatrixView: React.FC = () => {
  const curDisplayMode = useSelector(selectDisplayMode);
  const columns = useSelector(selectVisibleColumns);
  const rows = useSelector(selectVisibleRows);

  const children = [<span key="empty" className="empty" />];
  for (let col of columns) {
    children.push(
      <MatrixLabel key={`matrixlabel-${col}`} label={col} type="top" />
    );
  }

  for (let row of rows) {
    children.push(
      <MatrixLabel key={`matrixlabel-${row}`} label={row} type="left" />
    );

    for (let col of columns) {
      children.push(
        <MatrixCell key={`matrixcell-${row}-${col}`} column={col} row={row} />
      );
    }
  }

  return (
    <StyledMatrix 
      numColumns={columns.length} 
      hidden={curDisplayMode !== 'matrix'} 
      f={fontFamilies}
      c={colors}
    >
      {children}
    </StyledMatrix>
  );
};

const StyledMatrix = styled.div<{ numColumns: number, hidden: boolean, f: typeof fontFamilies, c: typeof colors }>`
  font-family: ${p => p.f.headerFont};
  font-size: 2em;
  display: ${p => p.hidden ? 'none' : 'grid'};
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  row-gap: 2rem;
  grid-auto-rows: max-content;
  grid-template-columns: ${p => `minmax(2rem, 10rem) repeat(${p.numColumns}, 1fr)`};
  background-color: ${p => p.c.light};
`;