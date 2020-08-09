declare const _exports: {
    mode: string;
    entry: string;
    output: {
        path: string;
        filename: string;
        libraryTarget: string;
    };
    module: {
        rules: ({
            test: RegExp;
            exclude: RegExp;
            use: {
                loader: string;
            };
        } | {
            test: RegExp;
            use: string[];
        })[];
    };
    resolve: {
        extensions: string[];
    };
    plugins: never[];
};
export = _exports;
