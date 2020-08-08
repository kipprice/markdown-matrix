import React from 'react';
import cx from 'classnames';
import { Competency, State } from '../../models'
import { useSelector } from 'react-redux';
import { selectSimilarValues } from '../../selectors/similarities';
import './styles.scss';
import { Diff } from '../Diff';

export type CompetencyViewProps = {
    competency: Competency;
    suffix?: string;
    className?: string;
};

export const CompetencyView: React.FC<CompetencyViewProps> = ({ competency, suffix, className }) => {

    const similarities = useSelector((state: State) => selectSimilarValues(state, competency.id));

    return (
        <div className={cx('name', className)}>
            <Diff name={competency.name} similarities={similarities} />
            {suffix && <span className='suffix'>{suffix}</span>}
        </div>
    );
    
    
};
