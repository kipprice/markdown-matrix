import React from 'react';
import { MarkdownToMatrix } from 'react-markdown-to-matrix';

export const App: React.FC = () => {
    return(
        <MarkdownToMatrix 
            title='Markdown-To-Matrix'
            subtitle='kip price'
            enabledOptions={['diff', 'filters', 'displayMode', 'upload']}
            
            // uncomment to auto-load a file into the app
            //fileUrls={["../tester.md"]}
            
            // if the markdown file has embedded HTML, default to showing it
            renderHtml={true}

            /** make sure to use longform hex values here; otherwise the drop shadows won't work well */
            customTheme={{
                lightTheme: '#eeeeee',
                dark: '#333333',
                darkTheme: '#444444',
                light: "#ffffff",

                headerFont: 'Open Sans',
                bodyFont: 'Anonymous Pro'
            }}
        />
    );
};
