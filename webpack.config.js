var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new
HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/app/index.jsx',
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader?-url', 'postcss-loader', 'sass-loader']
            },

            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader?-url', 'postcss-loader']
            }
        ]
    },

    output: {
        filename:  'bundle.js',
        path:__dirname + '/public'
    },
    resolve: {
            extensions: ['.js', '.jsx']
    },

    plugins: [HTMLWebpackPluginConfig]
};
