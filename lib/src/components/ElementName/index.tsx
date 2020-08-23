import React from 'react';
import styled from '@emotion/styled';
import { Element, State } from '../../models'
import { useSelector } from 'react-redux';
import { selectSimilarElements } from '../../selectors/similarities';
import { Diff } from '../Diff';

export type ElementNameProps = {
    subtle?: boolean;
    element: Element;
    suffix?: string;
    className?: string;
};

export const ElementName: React.FC<ElementNameProps> = ({ element: competency, suffix, className, subtle }) => {
    const similarities = useSelector((state: State) => selectSimilarElements(state, competency.id));

    return (
        <StyledName className={className} subtle={subtle}>
            <Diff name={competency.name} similarities={similarities} />
            {suffix && <StyledSuffix>{suffix}</StyledSuffix>}
        </StyledName>
    );
};

const StyledName = styled.div<{ subtle?: boolean }>`
    position: relative;
    cursor: pointer;
    opacity: ${p => p.subtle? 0.7 : 1};

    &:hover .hover {
        display: block;
    }
`;

const StyledSuffix = styled.span`
    opacity: 0.5;
`;