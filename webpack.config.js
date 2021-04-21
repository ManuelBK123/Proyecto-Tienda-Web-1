const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react"],
                        plugins: [
                            "react-hot-loader/babel",
                            "jsx-control-statements"
                        ]
                    }
                }
            },
            //Babel Loader
            {
                test: /\.(png|gif|jpg|svg|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]'
                        }
                    }

                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    }
                ]
            },
        ]
    },
    devServer: {
        historyApiFallback : true,
        compress: true,
        port: 8080,
    }
}