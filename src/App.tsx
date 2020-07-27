import React, { useEffect } from "react";
import "./App.scss";
import { FilterBar } from "./components/FilterBar";
import { ListView } from "./components/ListView";
import { MatrixView } from "./components/MatrixView";
import { useDispatch } from "react-redux";

function App() {

  return (
    <div className="layout">
      <FilterBar />
      <ListView />
      <MatrixView />
    </div>
  );
}

export default App;
