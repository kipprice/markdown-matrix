import React from 'react';
import { Element, RowName } from '../../../models';
import './styles.scss';
export declare type MatrixItemProps = {
    element: Element;
    row: RowName;
    origin: RowName | 'other';
};
export declare const MatrixItem: React.FC<MatrixItemProps>;
