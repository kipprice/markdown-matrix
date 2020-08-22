import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { OptionType, Theme, DisplayMode } from './models';
import { App } from './App';

export type MarkdownToMatrixProps = {
    enabledOptions: OptionType[]
    title: string;
    subtitle: string;
    fileUrls?: string[];
    customTheme?: Theme,
    defaultMode?: DisplayMode,
}

export const MarkdownToMatrix: React.FC<MarkdownToMatrixProps> = (props) => {
    return (
        <Provider store={store}>
            <App {...props} />
        </Provider>
    )
}