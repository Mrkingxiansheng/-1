const { override, removeModuleScopePlugin, addWebpackAlias } = require('customize-cra');

const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = override(
    addWebpackAlias({
        "@": path.resolve(__dirname, "./src"),
        "@api": path.resolve(__dirname, "./src/api"),
        "@common": path.resolve(__dirname, "./src/common"),
        "@utils": path.resolve(__dirname, "./src/utils"),
    }),
    removeModuleScopePlugin(),
);
