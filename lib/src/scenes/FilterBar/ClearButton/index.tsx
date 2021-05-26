import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { fontFamilies, colors } from "../../../helpers/styles";
import { clear } from "../../../helpers/clear";

export const ClearButton = () => {
  const dispatch = useDispatch();
  const onClear = useCallback(() => {
    clear(dispatch);
  }, []);
  return (
    <StyledClearButton c={colors} f={fontFamilies} onClick={onClear}>
      Clear
    </StyledClearButton>
  );
};

const StyledClearButton = styled.button<{
  f: typeof fontFamilies;
  c: typeof colors;
}>`
  padding: 0.5rem;
  font-family: ${(p) => p.f.bodyFont};
  border: none;
  border-radius: 5px;
  background-color: ${(p) => p.c.light};
  color: ${(p) => p.c.dark};
  cursor: pointer;
  flex-grow: 1;

  &:hover {
    box-shadow: 4px 4px 0 1px ${(p) => p.c.light}33;
  }
`;
