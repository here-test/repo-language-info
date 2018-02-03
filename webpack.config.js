let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let isProduction = process.env.ENV === 'prod';

module.exports = {
    entry: {
        app: [
            './src/index.js',
            './src/app.scss',
        ],
        vendor: [
            'bulma',
        ],
    },
    output: {
        publicPath: "/dist/",
        path: path.join(__dirname, './dist'),
        filename: 'js/[name].js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        }
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // {
            //     loader: 'postcss-loader',
            //     options: {
            //         plugins: () => [require('autoprefixer')]
            //     }
            // }
        ],
    },
    plugins: [
        new ExtractTextPlugin('styles/[name].css'),
        new webpack.LoaderOptionsPlugin({
            minimize: isProduction
        }),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ],
    node: {
        fs: "empty"
    }
};

if (isProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
    module.exports.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    );
}
