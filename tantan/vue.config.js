module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://129.204.96.149:88/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            },
        }
    }
}