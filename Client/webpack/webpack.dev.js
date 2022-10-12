const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    devServer: {
        compress: true,
        port: 3000,
        hot: true,
        open: true,
    },
    plugins: [
        new ReactRefreshWebpackPlugin()
    ]
};