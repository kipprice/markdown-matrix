import React from 'react';
import styled from '@emotion/styled';
import { Filter } from './Filter';

export type FiltersProps<T extends string> = {
    title: string;
    filters: T[];
    onFilterSelect: (filter: T) => void;
    isFilterSelected: (filter: T) => boolean;
    onShowAll?: () => void;
    onHideAll?: () => void;
};

export const Filters = <T extends string>({ title, filters, onFilterSelect, onShowAll, onHideAll, isFilterSelected } : FiltersProps<T>) => {

    const onToggleCallback = (filter: T) => {
        return () => {
            onFilterSelect(filter)
        }
    }

    return(
        <StyledFilters>
            <span className="label">{title}</span>
            <div className='quickActions'>
                {onShowAll && <button onClick={onShowAll}>Show All</button>}
                {onHideAll && <button onClick={onHideAll}>Hide All</button>}
            </div>
            
            {filters.map((f) => {
                const cb = onToggleCallback(f);
                return <Filter key={`filters-${title}-${f}`} onToggle={cb} label={f} isSelected={isFilterSelected(f)} />
            })}
        </StyledFilters>
    );
};

const StyledFilters = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;


