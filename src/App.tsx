import React from "react";
import "./App.scss";
import { FilterBar } from "./components/FilterBar";
import { ListView } from "./components/ListView";
import { MatrixView } from "./components/MatrixView";
import { UploadView } from './components/UploadView';

function App() {

  return (
    <div className="layout">
      <FilterBar />
      <ListView />
      <MatrixView />
      <UploadView />
    </div>
  );
}

export default App;
