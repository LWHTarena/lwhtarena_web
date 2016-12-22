/**
 * Created by Administrator on 2016/12/22.
 */

module.exports={
    entry:'./main.js',
    output:{
        filename:'js/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
        ]
    }
};