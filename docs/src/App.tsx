import React from 'react';
import { MarkdownToMatrix } from 'react-markdown-to-matrix';
import { Wrapper } from './Wrapper';

export const App: React.FC = () => {
    return(
        <MarkdownToMatrix 

            title='Markdown-To-Matrix'
            subtitle='kip price'

            // in order to embed just the matrix, leave this blank
            enabledOptions={['diff', 'filters', 'displayMode', 'upload']}
            
            // uncomment to auto-load a file into the app
            // (this is required if no options are provided)
            //fileUrls={["../tester.md", { url: "../secondary.md", hideByDefault: true }]}
            
            // if the markdown file has embedded HTML, default to showing it
            renderHtml={true}

            /** make sure to use longform hex values here; otherwise the drop shadows won't work well */
            customTheme={{
                lightTheme: '#F0F0F5',
                headerFont: 'Open Sans',
                bodyFont: 'Anonymous Pro'
            }}
            
            excludeHeaders={['FAQ']}

            // uncomment to turn this into a checklist
            // wrapperElement={Wrapper}
        />
    );
};
