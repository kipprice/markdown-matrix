import React from "react";
import styled from '@emotion/styled';
import { useSelector } from "react-redux";
import { selectRows } from "../../selectors/rows";
import { selectDisplayMode } from "../../selectors/filters";
import { ListGroup } from "./ListGroup";
import { colors } from '../../helpers/styles';

export const ListView: React.FC = () => {
  const rows = useSelector(selectRows);
  const displayMode = useSelector(selectDisplayMode);

  if (displayMode !== "list") {
    return null;
  }

  return (
    <StyledList c={colors}>
      {[...rows].map((l) => (
        <ListGroup key={l} row={l} />
      ))}
    </StyledList>
  );
};

const StyledList = styled.div<{c: typeof colors}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
  width: 100%;
  overflow-y: auto;
  background-color: ${p => p.c.light};
`;
