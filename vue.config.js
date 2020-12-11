module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                //默认配置: '@' : 'src'
                //router/store可以通过$router/$store调用,故不需配置
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}
