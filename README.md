# Markdown-to-Matrix

This allows uploading of a markdown file into the competency matrix view which can then be used to visualize a grid layout of the document. It assumes that the H2s (## xyz) in the markdown document correspond to rows and the H3s (### H3) correspond to columns. 

Once rendered in the app, you can choose to show or hide various elements of the competencies.

This comes both as a standalone app (see the `app` folder) and as a library for use in other applications (in the `lib` folder).

If you're interested in embedding this tool into an app of your own, you can get it via `npm install react-markdown-to-matrix`.

## Developing with the app
1. Add the app to your React project with `npm install react-markdown-to-matrix` or `yarn add react-markdown-to-matrix`
1. Add the matrix view ...TODO

## Developing for the App
1. Clone the repo
1. Run `sh setup.sh --dev` in the root folder (assumes UNIX-based system)
1. Open a new terminal to the `lib` folder and run `yarn build -w`
1. Open a new terminal to the `app` folder and run `yarn start`
1. Go to localhost:5050 to see the app in action