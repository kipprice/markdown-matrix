import { ColumnName, RowName } from '../../../models';
import React from 'react';
import './styles.scss';
import cx from 'classnames';

export type MatrixLabelProps = {
    label: RowName | ColumnName;
    className?: string;
}

export const MatrixLabel = ({ label, className }: MatrixLabelProps) => {
    return <div className={cx('label', className)}>{label}</div>
}