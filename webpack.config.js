const webpack = require('webpack');
const path = require('path');

require('babel-polyfill');

module.exports = {
    entry: [
        './src/index'
    ],
    node: {
        fs: "empty"
    },
    module: {
        loaders: [
            {test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader'},
        ]
    },
    resolve: {
        modules: [
            path.resolve('./'),
            path.resolve('./node_modules'),
        ],
        extensions: ['.js', '.scss'],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        host: 'localhost',
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
