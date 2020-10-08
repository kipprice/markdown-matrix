import React from 'react';
import type { ElementWrapperProps } from 'react-markdown-to-matrix';


export const Wrapper: React.FC<ElementWrapperProps> = ({
    children,
    content,
    context,
    element
}) => {
    return (
        <label>
            <input 
                type='checkbox' 
                style={{ marginLeft: '-1.2rem' }} 
                onChange={() => console.log(`${element?.column} x ${context?.currentRow} : ${content}`)}
            />
            {children}
        </label>
    );
};
