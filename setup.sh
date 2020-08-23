#!/bin/bash

compile_lib() {
    echo ""
    echo "==> Installing lib folder"

    cd lib
    yarn install
    cd ..
}

compile_app() {
    echo ""
    echo "==> Installing app folder"

    cd app
    yarn install
    cd ..
}

link_for_dev() {
    echo ""
    echo "==> Symlinking folders"

    path=$PWD
    node_module_path="$path/app/node_modules/react-markdown-to-matrix/"

    rm -rf $node_module_path
    mkdir $node_module_path

    ln -s $path/lib/package.json $node_module_path
    ln -s $path/lib/dist $node_module_path
    ln -s $path/lib/typings $node_module_path
    ln -s $path/lib/res $node_module_path

    echo "Linked"
}

main() {
    clear
    
    compile_lib
    compile_app

    dev_flag=$1
    if [[ "$dev_flag" = "--dev" ]]; then
        link_for_dev
    fi

    echo ""
    echo "==> Done!"
}

main "$@"