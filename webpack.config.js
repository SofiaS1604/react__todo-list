const path = require('path');
const webpack = require('webpack');

const htmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
})

module.exports = {
    entry: [
        '@babel/polyfill',
        '@babel/register',
        'webpack-hot-middleware/client',
        "./src/index.jsx",
    ],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {presets: ["@babel/env"]}
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".json"]
    },
    output: {
        path: path.resolve(__dirname, "public/"),
        publicPath: "/public/",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            alwaysWriteToDisk: true,
            title: "todo list",
            filename: "index.html",
            template: "src/html-templates/index.hbs",
            env: "development",
            hash: true,
            inject: false
        }),
        new htmlWebpackPugPlugin(),
        new webpack.DefinePlugin({
            'process.env':
                {NODE_ENV: JSON.stringify('development')}
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}