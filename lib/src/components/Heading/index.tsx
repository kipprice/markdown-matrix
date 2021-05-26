import styled from '@emotion/styled';
import React, { HTMLProps } from 'react';
import { fontFamilies } from '../../helpers/styles';

export type HeadingProps = HTMLProps<HTMLDivElement> & {
    as: 'h2' | 'h3' | 'h4';
    mode: 'matrix' | 'list';
};

export const Heading: React.FC<HeadingProps> = ({ as, mode, children, ...props }) => {

    const StyledHeading = styled(mode === 'matrix' ? 'div' : as)`
        margin: 0;
        padding: 0;
        font-family: ${fontFamilies.headerFont};
    `;

    return(
        <StyledHeading {...props}>{children}</StyledHeading>
    );
};

