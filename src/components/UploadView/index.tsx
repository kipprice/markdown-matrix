import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import cx from "classnames";
import { selectHasCompetencies } from "../../selectors/competencies";
import { UploadButton } from "../UploadButton";

export const UploadView: React.FC = () => {
  const hasCompetencies = useSelector(selectHasCompetencies);

  return (
    <div className={cx("uploadView", hasCompetencies && "hidden")}>
      <UploadButton label="Upload File(s)" />
      <div className="content">
        <h3>First Time Here?</h3>
        <span>This tool takes in markdown (*.md) files in the format of:</span>
        {/* prettier-ignore */}
        <pre>{`
# [Header of file]

[optional description]

## [Row Name 1]

### [Column Name A]

- item for row 1 and column A
- another item for row 1 and column A

### [Column Name B]

- the only item for row 1 and column B

## [Row Name 2]

### [Column Name A]

- item for row 2 and column A
- another item for row 2 and column A

...
          `}</pre>
        <div className="postPre">
          This format will be turned into a matrix view with the corresponding
          headers being converted to row and column names.
        </div>
      </div>
    </div>
  );
};
