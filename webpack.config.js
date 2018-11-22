const path=require('path');
const webpack = require('webpack');
const htmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
    entry:path.resolve(__dirname,'src/js/main.js'),
    output:{
        filename: 'bundle.js',
        path:path.resolve(__dirname,'./dist')
    },
    plugins:[
        new htmlWebpackPlugin({
            //根据指定得路径，去生成内存中的页面
            template:path.join(__dirname,'src/index.html'),
            //指定生成得页面得名称
            filename:'index.html'
        }),
        new VueLoaderPlugin()
       
    ],
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:[
                            "env"
                        ]
                    }
                },
                exclude:path.resolve(__dirname,"node_modules"),
                include:path.resolve(__dirname,"src")
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                exclude: /node_modules/
            },
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
        ]
    }
   

  
    
}