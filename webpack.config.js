const fs = require('fs');
const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const argv = require('yargs').argv;

// start判断
if (argv._[0] === 'serve') {
    console.log(argv)
    if (!argv.open || typeof argv.open !== 'string') {
        console.error('请在命令行中输入模块名 如: npm run start home');
        process.exit(1);
    } else {
        argv.module = argv.open// 得到模块名
    }
}

// 打包判断
if (argv.env) {
    console.log(argv)
    if (argv.env && (!argv.module || typeof argv.module !== 'string')) {
        console.error('请在命令行中输入模块名，例如 npm run build -- --module about');
        process.exit(1);
    }
}

const srcDir = path.resolve(__dirname, 'src');// src的路径

const modulePath = findModulePath(argv.module, srcDir); // 拼接src下的模块路径 
// 输入的模块名是否在src下的判断
if (!modulePath) {
    console.error(`包名 ${argv.module} 在 src 目录下不存在`);
    process.exit(1);
}

module.exports = (env) => {
    return {
        entry: `${modulePath}/index.tsx`,
        mode: env === 'production' ? 'production' : 'development',
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
        output: {
            path: path.resolve(__dirname, `dist/${argv.module}`), // 打包之后输出的路径在src下的dist中动态创建当前模块名的文件夹
            filename: "[name]_[chunkhash:8].js",// 打包之后输出的文件名
            //网页报错地方 路径找不到
            publicPath: `${argv._[0] === 'serve' ? '/' : './'}`,
            environment: {
                arrowFunction: false,
            },
        },
        devtool: "inline-source-map",
        devServer: {
            port: 8080,
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        'ts-loader',
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.css/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.less/,
                    use: ['style-loader', 'css-loader', 'less-loader']
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HTMLWebpackPlugin({
                template: `${modulePath}/html/index.html`,
            }),
        ],
    };
};

/**
 * 判断输入的模块在src的文件目录下是否存在
 * @param {*} moduleName 模块名
 * @param {*} dir src的路径
 * @returns 
 */
function findModulePath(moduleName, dir) {
    const files = fs.readdirSync(dir);

    for (let i = 0; i < files.length; i++) {
        const filePath = path.join(dir, files[i]);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (files[i] === moduleName) {
                return filePath;
            }

            const subModulePath = findModulePath(moduleName, filePath);
            if (subModulePath) {
                return subModulePath;
            }
        }
    }

    return null;
}