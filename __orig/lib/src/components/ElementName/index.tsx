import React from 'react';
import cx from 'classnames';
import { Element, State } from '../../models'
import { useSelector } from 'react-redux';
import { selectSimilarElements } from '../../selectors/similarities';
import './styles.scss';
import { Diff } from '../Diff';

export type ElementNameProps = {
    element: Element;
    suffix?: string;
    className?: string;
};

export const ElementName: React.FC<ElementNameProps> = ({ element: competency, suffix, className }) => {

    const similarities = useSelector((state: State) => selectSimilarElements(state, competency.id));

    return (
        <div className={cx('name', className)}>
            <Diff name={competency.name} similarities={similarities} />
            {suffix && <span className='suffix'>{suffix}</span>}
        </div>
    );
    
    
};
