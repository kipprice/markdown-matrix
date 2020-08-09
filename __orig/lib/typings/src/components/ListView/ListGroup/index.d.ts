/// <reference types="react" />
import { ColumnName, RowName } from "../../../models";
import "./styles.scss";
export declare type ListGroupProps = {
    column?: ColumnName;
    row: RowName;
};
export declare const ListGroup: ({ row, column }: ListGroupProps) => JSX.Element;
