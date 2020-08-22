import React, { useEffect } from "react";
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { FilterBar } from "./components/FilterBar";
import { ListView } from "./components/ListView";
import { MatrixView } from "./components/MatrixView";
import { UploadView } from './components/UploadView';
import { loadFiles } from './thunks/load';
import { createDisplayModeAction } from './reducers';
import { MarkdownToMatrixProps } from 'index';
import { colors, fontFamilies } from './helpers/styles';

export const App: React.FC<MarkdownToMatrixProps> = ({
  enabledOptions = ['filters', 'displayMode'],
  title,
  subtitle, 
  fileUrls,
  customTheme,
  defaultMode
}) => {

  const allowUpload = enabledOptions.includes('upload');

  // load files if any were provided
  const dispatch = useDispatch();
  if (fileUrls && fileUrls.length > 0) {
    dispatch(loadFiles(fileUrls));
  }

  // set the default mode
  if (defaultMode) {
    useEffect(() => {
      dispatch(createDisplayModeAction(defaultMode))
    });
  }

  console.log(JSON.stringify(customTheme))
  if (customTheme) {
    colors.dark = customTheme.dark || colors.dark;
    colors.darkTheme = customTheme.darkTheme || colors.darkTheme;
    colors.light = customTheme.light || colors.light;
    colors.lightTheme = customTheme.lightTheme || colors.lightTheme;
    
    fontFamilies.bodyFont = customTheme.bodyFont || fontFamilies.bodyFont;
    fontFamilies.headerFont = customTheme.headerFont || fontFamilies.headerFont;
  }

  return (
    <StyledLayout>
      <FilterBar title={title} subtitle={subtitle} enabledOptions={enabledOptions} />
      <ListView />
      <MatrixView />
      {allowUpload && <UploadView />}
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;