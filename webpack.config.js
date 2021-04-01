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
        //   {
        //     test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        //     use: [
        //       {
        //         // loads files as base64 encoded data url if image file is less than set limit
        //         loader: 'url-loader',
        //         options: {
        //           // if file is greater than the limit (bytes), file-loader is used as fallback
        //           limit: 8192,
        //         },
        //       },
        //     ],
        //   },  
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