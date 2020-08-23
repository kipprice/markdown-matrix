import React, {KeyboardEvent} from 'react';
import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../../models';
import { createEnableDiffsAction } from '../../../reducers';
import { colors } from '../../../helpers/styles';

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
        <StyledDiffToggle c={colors}>
            <label tabIndex={0} onKeyDown={onKeyDown}>
            <input type='checkbox' checked={isEnabled} onChange={onChange}></input>
            <div className='fakeCheck'></div>
                <div>Highlight Differences</div>
            </label>
        </StyledDiffToggle>
    );
};

const StyledDiffToggle = styled.div<{ c: typeof colors }>`
    margin: 1rem;
    padding: 0;
    
    input {
        display: none;
    }
    
    label {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .fakeCheck {
        width: 0.5rem;
        height: 0.5rem;
        border: 0.25rem solid ${p => p.c.light};
        background-color: ${p => p.c.light};
        margin-right: 0.5rem;
        border-radius: 3px;
    }

    input:checked + .fakeCheck {
        background-color: ${p => p.c.dark};
    }
`;