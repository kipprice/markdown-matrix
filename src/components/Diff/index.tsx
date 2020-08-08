import React from 'react';
import { Similarity } from '../../models'
import './styles.scss';
import { SortOrderEnum } from '../../helpers/levelDirection';

export type DiffProps = {
    name: string;
    similarities: Similarity[];
};

export const Diff: React.FC<DiffProps> = ({ name, similarities }) => {
    if (!similarities || similarities.length === 0) {
        return <>{name}</>
    }

    // this should be the closest comparison
    const { splitBy, differences } = similarities[0]
    const split = name.split(splitBy);

    return (
        <>
        {split.map((chunk, idx) => {
            const diff = differences[idx];
            const lastDiff = differences[idx - 1];
            const excludeSpace = (chunk[0] === ' ') && (!lastDiff || lastDiff === 'ø');

            return (
                <>
                    {excludeSpace ? ' ' : ''}
                    <span key={`diff-${chunk}-${idx}-${name}`} className={diff === 'ø' ? '' : 'diff'}>
                        {excludeSpace ? chunk.trimLeft() : chunk}
                    </span>
                </>
            )
        })}
        </>
    )
    
    
    
};
