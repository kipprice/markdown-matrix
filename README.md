# React Markdown-To-Matrix

This library creates an embeddable React application that will transform a specified markdown file into a matrix form, with H2s being turned into rows and H3s turned into columns. This also looks for differences between items and optionally highlights those differences.

## Developing in this repo
This repo is split into two parts: the library itself (`lib`) and a sample application that uses it (`docs`). In order to test changes to the library, it's recommended that you keep the sample app up and running and symlinked to the library. The provided `setup.sh` script will set up symlinks for you if you are on a UNIX-based system.

1. Clone the repo.
1. Run `sh setup.sh --dev` in the root folder (assumes UNIX-based system). This installs dependencies for both folders and symlinks the build results of `lib` into the `docs/node_modules` folder.
1. Open a new terminal to the `lib` folder and run `yarn build -w`.
1. Open a new terminal to the `docs` folder and run `yarn start`.
1. Go to localhost:5050 to see the app in action.

## Developing with the Library
Run `yarn add react-markdown-to-matrix` or `npm install react-markdown-to-matrix` to add to an existing React app.

You will then be able to use the `<MarkdownToMatrix>` component:

```jsx
import { MarkdownToMatrix } from 'react-markdown-to-matrix';

export const App: React.FC = () => {
    return(
        <MarkdownToMatrix 
            title='Markdown-To-Matrix'
            enabledOptions={['diff', 'filters', 'displayMode', 'upload']}
        />
    );
};
```

## Options
There are a variety of configuration options available within the MarkdownToMatrix component:

| Parameter         | Type               | Required?| Description                                                                |
| ---------         | ----               | ---------| -----------                                                                |
| `enabledOptions`  | string[]           | Required | The options to enable in the sidebar (see below)                           |
| `title`           | string             | Optional | The title to display in the sidebar                                        |
| `subtitle`        | string             | Optional | The subtitle to display in the sidebar                                     |
| `fileUrls`        | string[]           | Optional | If provided, the files to preload into the matrix view                     |
| `customTheme`     | Theme              | Optional | Style overrides for colors and fonts                                       |
| `defaultMode`     | 'matrix' or 'list' | Optional | What view mode to start with; defaults to 'matrix'                         |
| `renderHtml`      | boolean            | Optional | Set to true to render inline HTML within the loaded markdown               |
| `excludeHeaders`  | string[]           | Optional | Any H2s / H3s that shouldn't be parsed into headers can be specified here  |

### enabledOptions
There are four available options to enable or disable within the `enabledOptions` parameter.

- `'upload'`        : allows users to upload their own markdown files to this view
- `'filters'`       : allows users to hide rows or columns
- `'diff'`          : allows users to view a diff view of elements in the grid
- `'displayMode'`   : allows users to toggle between list and matrix view

If an empty string is provided, the sidebar is entirely hidden from the usesrs (which may be better for embedding). In this case,  a set of urls for `fileUrls` must be provided.

### customTheme

You can update a variety of aspects about how the app displays through the properties on the `customTheme` parameter. All fields are optional. All colors are expected to be specified as six-digit hex colors, including the `#` at the beginning.

| Theme Property    | Type          | Description                                           |
| --------------    | ----          | -----------                                           |
| `dark`            | HexColor      | The dark color to use for the foregrouund             |
| `light`           | HexColor      | The light color to use for the background             |
| `darkTheme`       | HexColor      | A complementary dark color; used for the sidebar      |
| `lightTheme`      | HexColor      | A complementary light color; used for hovers          |
| `bodyFont`        | FontFamily    | The font to use for all body text                     |
| `headerFont`      | FontFamily    | The font to use for all header text                   |
| `isDarkMode`      | boolean       | If true, reverses when light and dark colors are used |
