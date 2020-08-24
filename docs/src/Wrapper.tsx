import React from 'react';

export type WrapperProps = {
    content: string
};

export const Wrapper: React.FC<WrapperProps> = ({ children, content, ...props }) => {
    return(
        <label {...props}>
            <input type='checkbox' style={{marginLeft: '-1.2rem'}}></input>
            {children}
        </label>
            
    );
};
