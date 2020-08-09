import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { FilterBar } from "./components/FilterBar";
import { ListView } from "./components/ListView";
import { MatrixView } from "./components/MatrixView";
import { UploadView } from './components/UploadView';
import { loadFiles } from './thunks/load';
import { createDisplayModeAction } from './reducers';
import "./App.scss";
import { MarkdownToMatrixProps } from 'index';

export const App: React.FC<MarkdownToMatrixProps> = ({
  enabledOptions = ['filters', 'displayMode'],
  title,
  subtitle, 
  fileUrls,
  theme,
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

  if (theme) {
    // TODO: store the theme information in redux
  }

  return (
    <div className="layout">
      <FilterBar title={title} subtitle={subtitle} enabledOptions={enabledOptions} />
      <ListView />
      <MatrixView />
      {allowUpload && <UploadView />}
    </div>
  );
}
