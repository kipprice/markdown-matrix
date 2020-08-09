import React from "react";
import { ColumnName, RowName } from "../../../models";
import "./styles.scss";
export declare type MatrixCellProps = {
    column: ColumnName;
    row: RowName;
};
export declare const MatrixCell: React.FC<MatrixCellProps>;
