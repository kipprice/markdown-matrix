import React from 'react';
import { config } from '../../helpers/config';
import { Heading } from '../Heading';

export type HeadingWrapperProps = {
    text: string;
    type: 'row' | 'column';
    mode: 'matrix' | 'list';
    as: 'h2' | 'h3';
};

export const HeadingWrapper: React.FC<HeadingWrapperProps> = ({ children, text, ...props }) => {
    const wrapper = config.headingWrapper;

    const updatedChildren = <Heading {...props}>{children}</Heading>

    if (wrapper) {
        return React.createElement(wrapper, { ...props, text }, updatedChildren)
    }

    // wrap in a heading by default
    return(
        updatedChildren
    );
};
