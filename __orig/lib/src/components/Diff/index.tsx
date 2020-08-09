import React from 'react';
import { Similarity } from '../../models'
import './styles.scss';

export type DiffProps = {
    name: string;
    similarities: Similarity[];
};

export const Diff: React.FC<DiffProps> = ({ name, similarities }) => {
    if (!similarities || similarities.length === 0) {
        return <React.Fragment>{name}</React.Fragment>
    }

    // this should be the closest comparison
    const { splitBy, differences } = similarities[0]
    const split = name.split(splitBy);

    return (
        <React.Fragment>
        {split.map((chunk, idx) => {
            const diff = differences[idx];
            const lastDiff = differences[idx - 1];
            const excludeSpace = (chunk[0] === ' ') && (!lastDiff || lastDiff === 'ø');

            return (
                <React.Fragment>
                    {excludeSpace ? ' ' : ''}
                    <span key={`diff-${chunk}-${idx}-${name}`} className={diff === 'ø' ? '' : 'diff'}>
                        {excludeSpace ? chunk.trimLeft() : chunk}
                    </span>
                </React.Fragment>
            )
        })}
        </React.Fragment>
    )
    
    
    
};
