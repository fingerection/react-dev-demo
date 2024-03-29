module.exports = {
    entry: './Main.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: 8080
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exculde: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }
        ]
    }
}