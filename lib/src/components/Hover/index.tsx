import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../helpers/styles';

export type HoverProps = {
    className?: string;
};

export const Hover: React.FC<HoverProps> = ({ children, className }) => {
    return(
        <StyledHover c={colors} className={className}>
            {children}
        </StyledHover>
    );
};

const StyledHover = styled.div<{ c: typeof colors }>`
    background-color: ${p => p.c.lightTheme};
    padding: 1rem;
    border-radius: 3px;
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    box-shadow: 4px 4px 0 1px ${p => p.c.dark}22;
    z-index: 10;
    border: 1px solid ${p => p.c.dark};
    margin-top: 0.5rem;
    font-size: 0.8rem;
    padding: 0.5rem;

    li {
        font-weight: bold;

        .diffView {
            margin-top: 0.25rem;
            margin-bottom: 0.5rem;
            font-style: italic;
            font-weight: normal;
        }
    }
`;
