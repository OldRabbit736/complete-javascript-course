const path = require('path');   // built in node module
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js', // dot is current folder (.. is going up to the parent folder)
    output: {
        path: path.resolve(__dirname, 'dist'),   // __dirname is the current absolute path
        filename: 'js/bundle.js'
    },    
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'    // starting file
        })
    ]
};