import React from 'react';
import styled from '@emotion/styled';
import { Context, Element, State } from '../../models'
import { useSelector } from 'react-redux';
import { selectSimilarElements } from '../../selectors/similarities';
import { Diff } from '../Diff';
import { ElementWrapper } from '../../components/ElementWrapper';

export type ElementNameProps = {
    subtle?: boolean;
    element: Element;
    suffix?: string;
    className?: string;
    context: Context;
};

export const ElementName: React.FC<ElementNameProps> = ({ element, suffix, className, subtle, context }) => {
    const similarities = useSelector((state: State) => selectSimilarElements(state, element.id));

    return (
        <StyledName className={className} subtle={subtle}>

            <ElementWrapper content={element.name} element={element} context={context} >
                <Diff name={element.name} similarities={similarities} />
                {suffix && <StyledSuffix>{suffix}</StyledSuffix>}
            </ElementWrapper>

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