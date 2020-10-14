import React, { useEffect } from "react";
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { FilterBar } from "./scenes/FilterBar";
import { ListView } from "./scenes/ListView";
import { MatrixView } from "./scenes/MatrixView";
import { UploadView } from './scenes/UploadView';
import { loadFiles } from './thunks/load';
import { createDisplayModeAction, createEnableRenderHtmlAction } from './reducers';
import { MarkdownToMatrixProps } from 'index';
import { colors, parseCustomTheme } from './helpers/styles';
import { EXCLUDE_HEADERS } from './helpers/matcher';
import { config } from './helpers/config';
import { createDisableCollapsingAction } from './reducers/disableCollapsing';

export const App: React.FC<MarkdownToMatrixProps> = ({
  enabledOptions = ['filters', 'displayMode'],
  title,
  subtitle, 
  fileUrls,
  customTheme,
  defaultMode,
  renderHtml,
  excludeHeaders,
  wrapperElement,
  disableCollapsing,
  headingWrapperElement
}) => {

  const allowUpload = enabledOptions.includes('upload');

  // load files if any were provided
  const dispatch = useDispatch();
  if (fileUrls && fileUrls.length > 0) {
    useEffect(() => {
      dispatch(loadFiles(fileUrls));
    }, [fileUrls])
  }

  // set the default mode
  if (defaultMode) {
    useEffect(() => {
      dispatch(createDisplayModeAction(defaultMode))
    });
  }

  // don't allow collapsing
  if (disableCollapsing) {
    useEffect(() => {
      dispatch(createDisableCollapsingAction())
    })
  }

  if (renderHtml) {
    useEffect(() => {
      dispatch(createEnableRenderHtmlAction());
    });
  }

  if (excludeHeaders) {
    useEffect(() => {
      for (let exHead of excludeHeaders) {
        EXCLUDE_HEADERS.push(exHead);
      }
    })
  }

  if (customTheme) {
    parseCustomTheme(customTheme);
  }

  if (wrapperElement) {
    config.wrapper = wrapperElement;
  }

  if (headingWrapperElement) {
    config.headingWrapper = headingWrapperElement;
  }

  return (
    <StyledLayout c={colors}>
      <FilterBar title={title || ''} subtitle={subtitle || ''} enabledOptions={enabledOptions} />
      <ListView />
      <MatrixView />
      {allowUpload && <UploadView />}
    </StyledLayout>
  );
}

const StyledLayout = styled.div<{ c: typeof colors }>`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  color: ${p => p.c.dark}
`;