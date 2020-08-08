import React from 'react';
import { Competency, Level, State } from '../../../models';
import { CompetencyView } from '../../Competency';
import { Hover } from '../../Hover';
import { Diff } from '../../Diff';
import { useSelector } from 'react-redux';
import { selectSimilarValues } from '../../../selectors/similarities';
import './styles.scss';

export type MatrixItemProps = {
    competency: Competency;
    level: Level;
    origin: string;
};

export const MatrixItem: React.FC<MatrixItemProps> = ({ competency, level, origin }) => {
    const similarities = useSelector((s: State) => selectSimilarValues(s, competency.id));

    return(
        <li key={`mx-${level}-${origin}-${competency.id}`} className="matrixCompetency">
            <CompetencyView 
              key={`mx-${level}-${origin}-${competency.id}-inner`} 
              competency={competency} 
              suffix={getSuffix(origin, competency)} 
            />

            {similarities && similarities.length > 0 && 
            <Hover className='similarities'>
                <h3>Similar to:</h3>
                <ul>
                    {similarities.map((s, idx) => (
                        <li key={`mx-${competency.id}-d${idx}`}>
                            {s.value.originLevel}
                            <div className='diffView'><Diff name={s.value.name} similarities={[s]} /></div>
                        </li>
                    ))}
                </ul>
            </Hover>}
        </li>
    );
};

const getSuffix = (origin: 'similar' | 'other' | Level,  c: Competency) => {
    if (origin === 'other') { return `[${c.originLevel}]`; }
    if (origin === 'similar') { return ''; }
    return '';
}
