const path = require('path');   // built in node module

module.exports = {
    entry: './src/js/index.js', // dot is current folder (.. is going up to the parent folder)
    output: {
        path: path.resolve(__dirname, 'dist/js'),   // __dirname is the current absolute path
        filename: 'bundle.js'
    },    
};