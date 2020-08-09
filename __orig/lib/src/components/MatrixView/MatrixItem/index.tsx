import React from 'react';
import { Element, RowName, State } from '../../../models';
import { ElementName } from '../../ElementName';
import { Hover } from '../../Hover';
import { Diff } from '../../Diff';
import { useSelector } from 'react-redux';
import { selectSimilarElements } from '../../../selectors/similarities';
import './styles.scss';

export type MatrixItemProps = {
    element: Element;
    row: RowName;
    origin: RowName | 'other';
};

export const MatrixItem: React.FC<MatrixItemProps> = ({ element, row, origin }) => {
    const similarities = useSelector((s: State) => selectSimilarElements(s, element.id));

    return(
        <li key={`mx-${row}-${origin}-${element.id}`} className="matrixCompetency">
        
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
        </li>
    );
};

const getSuffix = (origin: 'other' | RowName,  elem: Element) => {
    if (origin === 'other') { return `[${elem.originRow}]`; }
    return '';
}
