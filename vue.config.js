module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: { // 配置跨域
            '/api': {
                target: 'https://zbuniversity.herokuapp.com/api/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => { }
    }
}

// 同源策略   只要不同源，就是跨域
/** http://localhost:8080/
 * 1.请求头 http:// https:// file://
 * 2.域名   localhost / 127.0.0.1 /www.baidu.com
 * 3.端口号 :8080 :8081 :5000 :5001
 */