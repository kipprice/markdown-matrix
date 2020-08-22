import React from "react";
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors } from '../../../../helpers/styles';

export type FilterProps = {
  label: string;
  isSelected: boolean;
  onToggle: () => void;
};

export const Filter = ({ label, isSelected, onToggle }: FilterProps) => {
  return (
    <StyledFilter
      c={colors}
      hidden={!isSelected}
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (event.keyCode === 13 || event.keyCode === 32) {
          onToggle();
          event.preventDefault();
        }
      }}
    >
      {label}
    </StyledFilter>
  );
};

const StyledFilter = styled.div<{ hidden: boolean, c: typeof colors }>`
  padding: 0.1rem 0.25rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
  width: auto;
  border-radius: 5px;
  ${p => p.hidden ? hiddenCss : notHiddenCss(p.c) }
`;

const hiddenCss = css`
  display: block;
  opacity: 0.5;
  font-size: 1rem;
`;

const notHiddenCss = (c: typeof colors) => css`
  background-color: ${c.light};
  color: ${c.dark};
`;