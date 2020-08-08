import React from 'react';
import { Level, Competency, State } from '../../../models';
import './styles.scss';
import { CompetencyView } from '../../Competency';
import { Hover } from '../..//Hover';
import { useSelector } from 'react-redux';
import { selectSimilarValues } from '../../../selectors/similarities';
import { Diff } from '../../Diff';

type ListItemProps = {
    level: Level;
    competency: Competency;
}

export const ListItem = ({ competency, level }: ListItemProps) => {
    const similarities = useSelector((state: State) => selectSimilarValues(state, competency.id));

    const otherLevels = competency.levels.filter((l) => l !== level );

    const showBubble = !!(otherLevels.length || similarities?.length)
    
    return (
        <div className='competency'>
            <CompetencyView className={otherLevels.length === 0 ? 'bold' : ''} competency={competency} />

            {showBubble &&
                <Hover className='levels'>
                {otherLevels.length !== 0 && (
                    <>
                    <div>Also in:</div>
                    <ul>
                        {otherLevels.map((l) => 
                            <li key={`${competency.id}-${l}`}>{l}</li>
                        )}
                    </ul>
                    </>
                )}

                {similarities && similarities?.length !== 0 && 
                    <>
                        <div>Similar to values in:</div>
                        <ul>
                            {similarities.map((s) => 
                                <li key={`${competency.id}-${s.value.id}-sim`}>
                                    {s.value.originLevel}
                                    <div className='diffView'><Diff name={s.value.name} similarities={[s]} /></div>
                                </li>
                            )}
                        </ul>
                    </>
                }

                </Hover>
            }
        </div>
    )
}
