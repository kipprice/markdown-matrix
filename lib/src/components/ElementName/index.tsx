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


    // if the element needs to be modified, wrapping elements can 
    // use createChildren to generate a new set of children with
    // the appropriate context
    const createChildren = (e: Element) => (
        <>
            <Diff name={e.name} similarities={similarities} />
            {suffix && <StyledSuffix>{suffix}</StyledSuffix>}
        </>
    )

    return (
        <StyledName className={className} subtle={subtle}>

            <ElementWrapper content={element.name} element={element} context={context} createChildren={createChildren}>
                {createChildren(element)}
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