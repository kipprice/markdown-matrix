import React from 'react';
import styled from '@emotion/styled';
import { Similarity } from '../../models'
import { colors } from '../../helpers/styles';

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
        <>
        {split.map((chunk, idx) => {
            const diff = differences[idx];
            const lastDiff = differences[idx - 1];
            const excludeSpace = (chunk[0] === ' ') && (!lastDiff || lastDiff === 'ø');
            const key = `diff-${chunk}-${idx}-${name}`;
            const content = excludeSpace ? chunk.trimLeft() : chunk
            return (
                <React.Fragment>
                    {excludeSpace ? ' ' : ''}
                    {
                        diff === 'ø' ? 
                        <span key={key}>{content}</span> :
                        <StyledDiff c={colors} key={key}>{content}</StyledDiff>
                    }
                </React.Fragment>
            )
        })}
        </>
    )
};


const StyledDiff = styled.span<{ c: typeof colors }>`
    font-weight: bold;
    background-color: ${p => p.c.dark};
    color: ${colors.light};
`;