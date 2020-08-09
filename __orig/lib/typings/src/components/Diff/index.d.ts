import React from 'react';
import { Similarity } from '../../models';
import './styles.scss';
export declare type DiffProps = {
    name: string;
    similarities: Similarity[];
};
export declare const Diff: React.FC<DiffProps>;
