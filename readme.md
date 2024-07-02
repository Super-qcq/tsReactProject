1.先创建一个文件夹
2.文件夹中npm init -y
3.装webpack cnpm i webpack-cli webpack -D
4.装react cnpm i react react-dom @types/react @types/react-dom  
5.package.json 改 "scripts": { "build": "webpack --progress --mode development --env" }
6.根目录创建webpack.config.js
7.装tslosder cnpm i ts-loader -D
8.装typescript   cnpm i typescript -D
9.根目录配置tsconfig.json
10.装cnpm i html-webpack-plugin -D 并在webpack.config.js中进行配置
11.装cnpm i style-loader css-loader -D 并在webpack.config.js中进行配置
12.装cnpm i less-loader -D   cnpm i less -D 并在webpack.config.js中进行配置
13.装cnpm i webpack-dev-server -D  在package.json中配置"dev": "webpack-dev-server"
   自动编译的功能，不用每次修改之后手动编译
14.装cnpm i -D clean-webpack-plugin 作用 在每一次编译前把之前的目录清空 保证编译都是最新文件 避免旧文件的遗留并在webpack.config.js中进行配置
15.编译方式: npm run build -- --module about（模块名）
16.启动服务方式  npm run start home
17. 一些下载 可以按照package.json中的依赖执行cnpm install去下载
18. Live Server(npm run build -- --module about打包之后启动编译后的页面用的是这个服务器)   Webpack Dev Server( npm run start home 直接启动时用的是这个服务器)这两个工具/服务在功能上有所重叠，但通常用于不同的场景或开发阶段。

Live Server
Live Server 是一个 VS Code 插件，它提供了一个简单的静态文件服务器，用于预览 HTML 文件和相关的静态资源（如 CSS、JavaScript 和图片）。当你打开一个 HTML 文件并启动 Live Server 时，它会在你指定的端口（默认为 8080）上启动一个服务器，并自动刷新浏览器以显示任何更改。

Webpack Dev Server
Webpack Dev Server 是一个基于 Node.js 的服务器，它使用 webpack 编译你的前端资源，并提供一个开发环境，其中包括实时重新加载（live reloading）和热模块替换（hot module replacement，HMR）。它通常在你的项目中配置（例如在 webpack.config.js 文件中），并通过 npm run start 或类似的命令启动。