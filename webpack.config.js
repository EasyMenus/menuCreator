const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',  //development, production(ugl & min) 
    entry: ['./client/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer:{
        host: 'localhost',
        port: 8080,
        // contentBase: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/',  //front
        historyApiFallback: true,
        // inline: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        proxy:{              
            
            '/':{
                target: 'http://localhost:3000',
                secure: false,
                changeOrigin: true
            }          
        },
        hot: true 
    },

    module:{
        rules:[
          {
              test: /\.jsx?/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query:{
                presets: ["@babel/preset-env", "@babel/preset-react"]
              }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './client/index.html',
        }),
      ],
    resolve: {
      // Enable importing JS / JSX files without specifying their extension
      extensions: ['.js', '.jsx'],
    },
};
