module.exports = {
    css: {
        loaderOptions: {
            css: {
                localIdentName: '[name]__[local]-[hash:base64:5]',
                camelCase: true
            }
        }
    },
      // 基本路径
      baseUrl: './',
      // 输出文件目录
      outputDir: 'dist',
}