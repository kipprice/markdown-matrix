import styled from '@emotion/styled';
import React from 'react';
import { fontFamilies } from '../../helpers/styles';

export type HeadingProps = {
    as: 'h2' | 'h3';
    mode: 'matrix' | 'list';
};

export const Heading: React.FC<HeadingProps> = ({ as, mode, children }) => {

    const StyledHeading = styled(mode === 'matrix' ? 'div' : as)`
        margin: 0;
        padding: 0;
        font-family: ${fontFamilies.headerFont};
    `;

    return(
        <StyledHeading>{children}</StyledHeading>
    );
};

