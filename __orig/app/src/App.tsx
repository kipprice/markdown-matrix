import React from 'react';
import { MarkdownToMatrix } from 'markdown-to-matrix';

export const App: React.FC = () => {
    return(
        <MarkdownToMatrix 
            title='Markdown-To-Matrix'
            subtitle='kip price'
            enabledOptions={['diff', 'filters']}

        />
    );
};
