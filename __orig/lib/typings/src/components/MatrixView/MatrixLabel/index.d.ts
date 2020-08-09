/// <reference types="react" />
import { ColumnName, RowName } from '../../../models';
import './styles.scss';
export declare type MatrixLabelProps = {
    label: RowName | ColumnName;
    className?: string;
};
export declare const MatrixLabel: ({ label, className }: MatrixLabelProps) => JSX.Element;
