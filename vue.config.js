const path = require('path')


const config = {
    publicPath:'./',//部署应用包的基本路径

    lintOnSave: true,

    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
    },
    css:{
        loaderOptions:{
            //给 sass-loader 传递选项
            sass: {
                // data: `@import "@/assets/style/index.scss";`
            },
        }
    },
    devServer:{
        open:true,
        port:8080,
        proxy:{
            '/api': {
                target:'192.168.206.69:8000'
            }
        }
    }

}
module.exports = config;
