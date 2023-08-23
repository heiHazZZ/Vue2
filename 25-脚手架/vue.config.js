const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭语法检查

  // 方法一
  // 开启代理服务器，里面的写的端口号为与8080交互的端口号，并被8080
  // 代理服务器本身的端口号与页面的端口号（8080）一致
  // 这种配置代理方式只能代理一个服务器
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 开启代理服务器方法二
  devServer: {
    // 在端口号后加/atguigu,防止与本地数据发生冲突,造成不发送请求的情况
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        pathRewrite:{'/atguigu/':''}, // 向5000发动请求时,把/atguigu替换成空
        ws: true,  // 用于支持websocket
        changeOrigin: true  // 用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'/demo/':''}, // 向5000发动请求时,把/atguigu替换成空
        ws: true,
        changeOrigin: true
      },
    }
  }
})
