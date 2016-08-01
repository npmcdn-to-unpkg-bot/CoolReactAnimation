var webpack = require('webpack');
var fs = require('fs');

var path = require('path');
var urlProject = fs.realpathSync('./');
var node_modules = path.resolve(urlProject, 'node_modules');
//console.log(111,__dirname);
//console.log(222,urlProject);
config = {
    target: 'electron',
    entry: [
         "webpack-dev-server/client?http://0.0.0.0:8080",
        'webpack/hot/dev-server',
        path.resolve(urlProject, 'src/Main.jsx')
    ],
    //  'webpack/hot/dev-server',
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.json']
    },
    devtool: 'source-map',
    externals: {
        "electron": "require('electron')",
        "remote": "require('electron').remote",
        "fs": "require('fs')"
    },
    output: {
        path: path.resolve(urlProject, 'app'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react'],
                include: /src/,
                exclude: /node_modules/,
            },
            {test: /\.json$/, loader: "json-loader"},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.scss$/, loader: "style!css!sass"},
            {
                test: /css(\\|\/)[^\.]+\.(png|jpg)/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
        //new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
// {
//                 test: /\.jsx?$/, loader: 'babel',
//                 include: /src/,
//                 exclude: /node_modules/,
//                 query: {
//                     presets: ['es2015','stage-0','react']
//                 }
//             },