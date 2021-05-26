import styled from '@emotion/styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { Diff, ElementName, Hover } from '../../../components';
import { colors, fontFamilies } from '../../../helpers/styles';
import { Element, RowName, State } from '../../../models';
import { selectSimilarElements } from '../../../selectors';

type ListItemProps = {
    row: RowName;
    element: Element;
    idx: number;
}

export const ListItem = ({ element, row, idx }: ListItemProps) => {
    const similarities = useSelector((state: State) => selectSimilarElements(state, element.id));

    const otherRows = element.belongsToRows.filter((l) => l !== row );

    const showBubble = !!(otherRows.length || similarities?.length)
    
    return (
        <StyledCompetency c={colors} f={fontFamilies}>
            <ElementName subtle={otherRows.length > 0} element={element} context={{ currentRow: row, idx }} />

            {/* hover bubble for the list item */}
            {showBubble &&
                <Hover className='hover'>
                {otherRows.length !== 0 && (
                    <React.Fragment>
                    <div>Also in:</div>
                    <ul>
                        {otherRows.map((l) => 
                            <li key={`${element.id}-${l}`}>{l}</li>
                        )}
                    </ul>
                    </React.Fragment>
                )}

                {similarities && similarities?.length !== 0 && 
                    <React.Fragment>
                        <div>Similar to values in:</div>
                        <ul>
                            {similarities.map((s) => 
                                <li key={`${element.id}-${s.similarElement.id}-sim`}>
                                    {s.similarElement.originRow}
                                    <div className='diffView'><Diff name={s.similarElement.name} similarities={[s]} /></div>
                                </li>
                            )}
                        </ul>
                    </React.Fragment>
                }

                </Hover>
            }
        </StyledCompetency>
    )
}



const StyledCompetency = styled.div<{ c: typeof colors, f: typeof fontFamilies}>`
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 0.6em;
    border-top: 1px solid ${p => p.c.lightTheme};
    font-family: ${p => p.f.bodyFont};
    position: relative;

    &:hover .hover {
    display: block;

    li {
      font-weight: bold;
    }
  }
`;