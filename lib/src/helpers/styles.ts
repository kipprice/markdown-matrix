import { Theme } from '../models';

export const colors = {
    light: '#ffffff',
    dark: '#000019',
    darkTheme: '#10162f',
    lightTheme: '#F0F0F5',
}

export let isDarkMode = false;

export const fontFamilies = {
    headerFont: "Open Sans",
    bodyFont: "Anonymous Pro"
}

export const fontSizes = {
    headerSize: '1.5rem',
    bodySize: '1.5rem'
}

export const parseCustomTheme = (customTheme: Theme) => {
    if (!customTheme.isDarkMode) {
        parseLightMode(customTheme);
    } else {
        parseDarkMode(customTheme);
    }
    
    fontFamilies.bodyFont = customTheme.bodyFont || fontFamilies.bodyFont;
    fontFamilies.headerFont = customTheme.headerFont || fontFamilies.headerFont;
}

const parseLightMode = (customTheme: Theme) => {
    colors.dark = customTheme.dark || colors.dark;
    colors.darkTheme = customTheme.darkTheme || colors.darkTheme;
    colors.light = customTheme.light || colors.light;
    colors.lightTheme = customTheme.lightTheme || colors.lightTheme;
}

const parseDarkMode = (customTheme: Theme) => {
    isDarkMode = true;

    const curColors = {...colors}

    colors.dark = customTheme.light || curColors.light;
    colors.darkTheme = customTheme.darkTheme || curColors.darkTheme;
    colors.lightTheme = customTheme.lightTheme || curColors.lightTheme;
    colors.light = customTheme.dark || curColors.dark;
}