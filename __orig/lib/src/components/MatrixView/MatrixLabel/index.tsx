import { ColumnName, RowName } from '../../../models';
import React from 'react';
import styled from '@emotion/styled';

export type MatrixLabelProps = {
    label: RowName | ColumnName;
    type: 'left' | 'top';
}

export const MatrixLabel = ({ label, type }: MatrixLabelProps) => {
    return <StyledMatrixLabel type={type}>{label}</StyledMatrixLabel>
}

const StyledMatrixLabel = styled.div<{ type: 'top' | 'left'}>`
    align-self: center;
    height: 100%;
    font-size: 1rem;
    font-weight: bold;
    text-align: ${p => p.type === 'left' ? 'right' : 'left'};
    margin: ${p => p.type === 'left' ? '0 0.5rem' : '0 0 0 1.5rem'};
`;