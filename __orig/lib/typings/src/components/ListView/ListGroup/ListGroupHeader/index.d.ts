/// <reference types="react" />
import { ListGroupProps } from "..";
import "./styles.scss";
export declare type ListGroupHeaderProps = ListGroupProps & {
    onExpandCollapse: () => void;
};
export declare const ListGroupHeader: ({ row, column, onExpandCollapse, }: ListGroupHeaderProps) => JSX.Element;
