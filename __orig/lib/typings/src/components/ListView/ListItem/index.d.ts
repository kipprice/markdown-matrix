/// <reference types="react" />
import { RowName, Element } from '../../../models';
import './styles.scss';
declare type ListItemProps = {
    row: RowName;
    element: Element;
};
export declare const ListItem: ({ element, row }: ListItemProps) => JSX.Element;
export {};
