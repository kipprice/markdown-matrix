import React from 'react';
import { OptionType, Theme, DisplayMode } from './models';
export declare type MarkdownToMatrixProps = {
    enabledOptions: OptionType[];
    title: string;
    subtitle: string;
    fileUrls?: string[];
    theme?: Theme;
    defaultMode?: DisplayMode;
};
export declare const MarkdownToMatrix: React.FC<MarkdownToMatrixProps>;
