import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { OptionType, Theme, DisplayMode } from './models';
import { App } from './App';

export type MarkdownToMatrixProps = {

    /** 
     * the options to allow within this instance of the markdown-to-matrix component
     * 
     *  'upload'        - allows users to upload a file to render the matrix view with
     *  'filters'       - allows the user to choose what's visible within the matrix
     *  'diff'          - allows users to toggle a diff view of elements within the 
     *                    matrix
     *  'displayMode'   - allows users to toggle to a list instead of a matrix
     * 
    */
    enabledOptions: OptionType[];

    /** the title to render within the component */
    title: string;

    /** the subtitle to render within the component */
    subtitle: string;

    /** if provided, loads the specified file URLs by default */
    fileUrls?: string[];

    /** 
     * if provided, overrides the default theming for the application with the 
     * specified colors 
     * 
     * (see Theme for details on what can be themed) 
     */
    customTheme?: Theme,

    /** the default display mode to use for the document */
    defaultMode?: DisplayMode,

    /** if true, will render inline HTML from the markdown file */
    renderHtml?: boolean
}

export const MarkdownToMatrix: React.FC<MarkdownToMatrixProps> = (props) => {
    return (
        <Provider store={store}>
            <App {...props} />
        </Provider>
    )
}