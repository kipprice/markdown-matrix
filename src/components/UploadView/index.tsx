import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFiles } from '../../thunks/load';
import './styles.scss';
import cx from 'classnames';
import { selectCompetencies } from '../../selectors/competencies';

export type UploadViewProps = {
    
};

export const UploadView: React.FC<UploadViewProps> = ({  }) => {

    const dispatch = useDispatch();
    const competencies = useSelector(selectCompetencies);
    const keys = Object.keys(competencies);
    const onFileUpload = useCallback((files: FileList | null) => {
        if (!files) { return; }
        if (files.length === 0) { return; }

        const urls = [];
        for (let f of files) {
           urls.push(URL.createObjectURL(f))
        }
        dispatch(loadFiles(urls))
    }, [dispatch]);
    
    return(
        <div className={cx('upload', keys.length !== 0 && 'hidden')}>
            <label className='uploadButton'>
                Upload a Markdown File
                <input type='file' accept='.md' onChange={(e) => onFileUpload(e.target.files)} />
            </label>
            
        </div>
    );
};
