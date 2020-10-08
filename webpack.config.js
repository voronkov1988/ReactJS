const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    output: {
        filename: '[name].js'
    },
    module: { 
        
        rules: [
            {test: /\.js/, use: 'babel-loader'},
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: "json-loader"       
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]      
}