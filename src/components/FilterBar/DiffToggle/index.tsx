import React, {KeyboardEvent} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../../models';
import { createEnableDiffsAction } from '../../../reducers';
import './styles.scss';

export type DiffToggleProps = {
    
};

export const DiffToggle: React.FC<DiffToggleProps> = ({  }) => {
    const isEnabled = useSelector((s: State) => s.enableDiffs);
    const dispatch = useDispatch();

    const onChange = () => {
        dispatch(createEnableDiffsAction());
    }

    const onKeyDown = (event: KeyboardEvent<HTMLLabelElement>) => {
        if (event.keyCode === 32 || event.keyCode === 13) {
            onChange();
        } 
    }

    return(
        <div className='toggle'>
            <label tabIndex={0} onKeyDown={onKeyDown}>
            <input type='checkbox' checked={isEnabled} onChange={onChange}></input>
            <div className='fakeCheck'></div>
                <div>Highlight Differences</div>
            </label>
        </div>
    );
};
