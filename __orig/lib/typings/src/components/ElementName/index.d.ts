import React from 'react';
import { Element } from '../../models';
import './styles.scss';
export declare type ElementNameProps = {
    element: Element;
    suffix?: string;
    className?: string;
};
export declare const ElementName: React.FC<ElementNameProps>;
