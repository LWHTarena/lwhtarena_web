/**
 * Created by Administrator on 2016/12/23.
 */
var webpack =require("webpack");
module.exports={
    entry:'./main.js',
    output:{
        path: __dirname,
        filename:'bundle.js'
    },
    //压缩插件
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })

    ]
}