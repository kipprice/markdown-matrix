import React from 'react';
import type { ElementWrapperProps } from 'react-markdown-to-matrix';


export const Wrapper: React.FC<ElementWrapperProps> = ({
    children,
    content,
    context,
    element,
    //createChildren
}) => {
    return (
        <label>
            <input 
                name={context.currentRow}
                type='radio' 
                style={{ marginLeft: '-0.4rem' }} 
                onChange={() => console.log(`${element?.column} x ${context?.currentRow} : ${content}`)}
            />
            {children}

            {/** 
                alternatively, createChildren could be used here, providing 
                a modified version of `element` as an argument 
            */}
        </label>
    );
};
