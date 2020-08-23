import styled from '@emotion/styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { Diff, ElementName, Hover } from '../../../components';
import { Element, RowName, State } from '../../../models';
import { selectSimilarElements } from '../../../selectors/similarities';

export type MatrixItemProps = {
    element: Element;
    row: RowName;
    origin: RowName | 'other';
};

export const MatrixItem: React.FC<MatrixItemProps> = ({ element, row, origin }) => {
    const similarities = useSelector((s: State) => selectSimilarElements(s, element.id));

    return(
        <StyledMatrixCompetency key={`mx-${row}-${origin}-${element.id}`}>
        
            <ElementName 
              key={`mx-${row}-${origin}-${element.id}-inner`} 
              element={element} 
              suffix={getSuffix(origin, element)} 
            />

            {similarities && similarities.length > 0 && 
            <Hover className='similarities'>
                <h3>Similar to:</h3>
                <ul>
                    {similarities.map((s, idx) => (
                        <li key={`mx-${element.id}-d${idx}`}>
                            {s.similarElement.originRow}
                            <div className='diffView'><Diff name={s.similarElement.name} similarities={[s]} /></div>
                        </li>
                    ))}
                </ul>
            </Hover>}
        </StyledMatrixCompetency>
    );
};

const getSuffix = (origin: 'other' | RowName,  elem: Element) => {
    if (origin === 'other') { return `[${elem.originRow}]`; }
    return '';
}

const StyledMatrixCompetency = styled.li`
    margin: 0;
    margin-bottom: 1rem;
    padding: 0 0.5rem 0.5rem;
    list-style: none;
    position: relative;
    cursor: pointer;

    &:hover .similarities {
        display: block;

        li {
            list-style: none;
            margin-left: -2.5rem;
            margin-top: 1rem;
        }
    }
`;