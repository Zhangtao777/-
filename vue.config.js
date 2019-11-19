module.exports = {
    devServer:{
        proxy:{
            "/hongyue":{
                target: "https://api.huacaijia.com",
                changeOrigin: true,
                ws: true,
                pathRewrite:{
                    "^/hongyue": ""
                },
                cookieDomainRewrite:{
                    "*": "127.0.0.1"
                }
            }
        }
    }
}