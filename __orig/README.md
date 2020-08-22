# Markdown-to-Matrix

This allows uploading of a markdown file into the competency matrix view which can then be used to visualize a grid layout of the document. It assumes that the H2s (## xyz) in the markdown document correspond to rows and the H3s (### H3) correspond to columns. 

Once rendered in the app, you can choose to show or hide various elements of the competencies.

This comes both as a standalone app (see the `app` folder) and as a library for use in other applications (in the `lib` folder).

If you're interested in embedding this tool into an app of your own, you can get it via `npm install react-markdown-to-matrix`.