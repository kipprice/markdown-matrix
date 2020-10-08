import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { OptionType, Theme, DisplayMode } from './models';
import { App } from './App';
import { ElementWrapperProps } from './components/ElementWrapper';

export type FileUrl = {
    url: string;
    hideByDefault?: boolean;
}

export type MarkdownToMatrixProps = {

    /** 
     * the options to allow within this instance of the markdown-to-matrix component
     * 
     *  'upload'        - allows users to upload a file to render the matrix view with
     * 
     *  'filters'       - allows the user to choose what's visible within the matrix
     * 
     *  'diff'          - allows users to toggle a diff view of elements within the 
     *                    matrix
     * 
     *  'displayMode'   - allows users to toggle to a list instead of a matrix
     * 
    */
    enabledOptions: OptionType[];

    /** the title to render within the component */
    title?: string;

    /** the subtitle to render within the component */
    subtitle?: string;

    /** if provided, loads the specified file URLs by default */
    fileUrls?: (string | FileUrl)[];

    /** 
     * if provided, overrides the default theming for the application with the 
     * specified colors 
     * 
     * (see Theme for details on what can be themed) 
     */
    customTheme?: Theme;

    /** the default display mode to use for the document */
    defaultMode?: DisplayMode;

    /** if true, will render inline HTML from the markdown file */
    renderHtml?: boolean;

    /** 
     * if there are any headers in your markdown file that shouldn't become 
     * columns or rows, add them to this list
     */
    excludeHeaders?: string[];

    /**
     * if provided, wraps all elements in the matrix and list view with the 
     * provided element. Must pass through children without manipulation
     */
    wrapperElement?: React.FC<ElementWrapperProps>;
}

export const MarkdownToMatrix: React.FC<MarkdownToMatrixProps> = (props) => {
    return (
        <Provider store={store}>
            <App {...props} />
        </Provider>
    )
}

// additional exports
export { ElementWrapperProps };