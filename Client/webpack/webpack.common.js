const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const cssLoader = {
    loader: require.resolve('css-loader'),
    options: {
        sourceMap: true,
        importLoaders: 1,
        modules: {
            localIdentName: '[name]_[local]__[hash:base64:4]'
        }
    }
}

module.exports = {
    entry: './src/index.tsx',
    plugins: [
        new HtmlPlugin({
            template: "./public/index.html",
            minify: {
                minifyCSS: true,
                minifyJS: true
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", cssLoader, "sass-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset"
            },
            {
                test: /\.(svg)$/i,
                type: "asset/source"
            }
        ]
    },    
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "..", "dist"),
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true
    }
}