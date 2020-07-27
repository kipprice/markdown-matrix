import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import cx from "classnames";
import { selectHasCompetencies } from "../../selectors/competencies";
import { UploadButton } from "../UploadButton";

export const UploadView: React.FC = () => {
  const hasCompetencies = useSelector(selectHasCompetencies);

  return (
    <div className={cx("upload", hasCompetencies && "hidden")}>
      <div className="content">
        <h3>Getting Started</h3>
        <ol>
          <li>
            Create a markdown (.md) file with H2s (## xyz) corresponding to rows
            and H3s (### abc) corresponding to columns
          </li>
          <li>
            <UploadButton />
          </li>
        </ol>
      </div>
    </div>
  );
};
