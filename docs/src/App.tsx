import React from 'react';
import { MarkdownToMatrix } from 'react-markdown-to-matrix';
// import { Wrapper } from './Wrapper';

export const App: React.FC = () => {
    return(
        <MarkdownToMatrix 

            title='Markdown-To-Matrix'
            subtitle='kip price'

            // in order to embed just the matrix, leave this blank
            enabledOptions={['diff', 'filters', 'displayMode', 'upload']}
            
            // uncomment to auto-load a file into the app
            // (this is required if no options are provided)
            fileUrls={["../tester.md", { url: "../secondary.md", hideByDefault: true }]}
            
            // if the markdown file has embedded HTML, default to showing it
            renderHtml={true}

            /** make sure to use longform hex values here; otherwise the drop shadows won't work well */
            customTheme={{
                lightTheme: '#F0F0F5',
                headerFont: 'Open Sans',
                bodyFont: 'Anonymous Pro'
            }}
            
            // add any headers here that show up in the MD file but shouldn't become context in the app
            excludeHeaders={['FAQ']}

            // uncomment to turn this into a checklist
            // wrapperElement={Wrapper}
            
            // uncomment to play with wrapper elements on headers
            // headingWrapperElement={({ children}) => <div style={{backgroundColor: '#10162f', color: '#FFF'}}>{children}</div>}
            
            // uncomment to prevent the same elements from
            // being collapsed across rows
            // disableCollapsing={true}

            // uncomment to allow subheaders in matrix mode
            subheaders={['SUBHEADER', 'SUBHEADER B']}
        />

    );
};
