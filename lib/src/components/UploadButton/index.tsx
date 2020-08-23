/* @jsx jsx */
import React, { useCallback, KeyboardEvent } from "react";
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import { useDispatch } from "react-redux";
import { loadFiles } from "../../thunks/load";
import { colors, fontFamilies } from '../../helpers/styles';

export type UploadButtonProps = {
  theme?: "light" | "dark";
  label?: string;
};

export const UploadButton: React.FC<UploadButtonProps> = ({
  theme = "dark",
  label = "Upload File",
}) => {
  const dispatch = useDispatch();

  const onFileUpload = useCallback(
    (files: FileList | null) => {
      if (!files) {
        return;
      }
      if (files.length === 0) {
        return;
      }

      const urls = [];
      for (let f of files) {
        urls.push(URL.createObjectURL(f));
      }
      dispatch(loadFiles(urls));
    },
    [dispatch]
  );

  const onKeyDown = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      (e.target as HTMLLabelElement).click();
      e.preventDefault();
    }
  };

  return (
    <StyledUploadLabel
      c={colors}
      f={fontFamilies}
      colorTheme={theme}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {label}
      <HiddenInput
        multiple
        type="file"
        accept=".md"
        onChange={(e) => onFileUpload(e.target.files)}
      />
    </StyledUploadLabel>
  );
};

const StyledUploadLabel = styled.label<{colorTheme: 'dark' | 'light', f: typeof fontFamilies, c: typeof colors}>`
  font-family: ${p => p.f.bodyFont};
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  text-align: center;
  
  ${p => p.colorTheme === 'light' ? lightCss(p.c) : darkCss(p.c)}
`;

const HiddenInput = styled.input`
  display: none;
`;

const lightCss = (c: typeof colors) => css`
  background-color: ${c.light};
  color: ${c.dark};

  &:hover {
    box-shadow: 4px 4px 0 1px ${c.light}22;
  }
`;

const darkCss = (c: typeof colors) => css`
    background-color: ${c.dark};
    color: ${c.light};

    &:hover {
      box-shadow: 4px 4px 0 2px ${c.dark}22;
    }
`;
