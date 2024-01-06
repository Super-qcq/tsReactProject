1.先创建一个文件夹
2.文件夹中npm init -y
3.装webpack cnpm i webpack-cli webpack -D
4.装react cnpm i react react-dom @types/react @types/react-dom  
5.package.json 改 "scripts": { "build": "webpack" }
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