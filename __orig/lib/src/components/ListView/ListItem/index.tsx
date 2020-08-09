import React from 'react';
import { RowName, Element, State } from '../../../models';
import './styles.scss';
import { ElementName } from '../../ElementName';
import { Hover } from '../..//Hover';
import { useSelector } from 'react-redux';
import { selectSimilarElements } from '../../../selectors';
import { Diff } from '../../Diff';

type ListItemProps = {
    row: RowName;
    element: Element;
}

export const ListItem = ({ element, row }: ListItemProps) => {
    const similarities = useSelector((state: State) => selectSimilarElements(state, element.id));

    const otherRows = element.belongsToRows.filter((l) => l !== row );

    const showBubble = !!(otherRows.length || similarities?.length)
    
    return (
        <div className='competency'>
            <ElementName className={otherRows.length === 0 ? 'bold' : ''} element={element} />

            {/* hover bubble for the list item */}
            {showBubble &&
                <Hover className='hover'>
                {otherRows.length !== 0 && (
                    <React.Fragment>
                    <div>Also in:</div>
                    <ul>
                        {otherRows.map((l) => 
                            <li key={`${element.id}-${l}`}>{l}</li>
                        )}
                    </ul>
                    </React.Fragment>
                )}

                {similarities && similarities?.length !== 0 && 
                    <React.Fragment>
                        <div>Similar to values in:</div>
                        <ul>
                            {similarities.map((s) => 
                                <li key={`${element.id}-${s.similarElement.id}-sim`}>
                                    {s.similarElement.originRow}
                                    <div className='diffView'><Diff name={s.similarElement.name} similarities={[s]} /></div>
                                </li>
                            )}
                        </ul>
                    </React.Fragment>
                }

                </Hover>
            }
        </div>
    )
}
