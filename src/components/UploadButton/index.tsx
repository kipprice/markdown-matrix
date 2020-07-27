import React, { useCallback, KeyboardEvent } from "react";
import { useDispatch } from "react-redux";
import { loadFiles } from "../../thunks/load";
import "./styles.scss";
import cx from "classnames";

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
    <label
      className={cx("uploadButton", theme)}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {label}
      <input
        multiple
        type="file"
        accept=".md"
        onChange={(e) => onFileUpload(e.target.files)}
      />
    </label>
  );
};
