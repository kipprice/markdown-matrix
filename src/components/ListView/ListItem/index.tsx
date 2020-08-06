import React from 'react';
import { Level, Competency } from '../../../models';
import './styles.scss';
import { CompetencyView } from '../../Competency';

type ListItemProps = {
    level: Level;
    competency: Competency;
}

export const ListItem = ({ competency, level }: ListItemProps) => {
    const otherLevels = competency.levels.filter((l) => l !== level );

    return (
        <div className='competency'>
            <CompetencyView className={otherLevels.length === 0 ? 'bold' : ''} competency={competency} />

            {otherLevels.length !== 0 && 
                <div className='levels'>
                    <div>Also in:</div>
                    <ul>
                        {otherLevels.map((l) => 
                            <li key={`${competency.id}-${l}`}>{l}</li>
                        )}
                    </ul>
                </div>
            }
        </div>
    )
}
