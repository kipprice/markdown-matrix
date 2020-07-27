import React, { useCallback } from 'react';
import './styles.scss';
import { DisplayModeFilter } from './DisplayMode';
import { LevelFilters } from './LevelFilters';
import { useDispatch } from 'react-redux';
import { loadFiles } from '../../thunks/load';

export const FilterBar: React.FC = () => {
    const dispatch = useDispatch();

    const onFileUpload = useCallback((files: FileList | null) => {
        if (!files) { return; }
        if (files.length === 0) { return; }

        const urls = [];
        for (let f of files) {
           urls.push(URL.createObjectURL(f))
        }
        dispatch(loadFiles(urls))
    }, [dispatch]);

    return (
        <div className='filterBar'>
            <div className='subtitle'>Competency Explorer</div>
            <div className='title'>Codecademy Engineering</div>
            <DisplayModeFilter />
            <LevelFilters />
            <input type='file' accept='.md' onChange={(e) => onFileUpload(e.target.files)} />
        </div>
    );
}

