# webpack

wepack 是一个现代的JavaScript应用模块打包器（module bundler），它能把各种资源，例如JS（含JSX）、coffee、样式（less/sass）、图片等都作为模块来处理和使用。

>> 直接使用require（xxx）的形式来映入各种模块
 
### webpack安装
> 使用npm的形式来安装
>
>> $npm install webpack -g //全局安装webpack， -g 是全局安装的意思。
>
> 还可以直接安装到项目的依赖里，也就是写入package.json
>
>> npm init
>> 
>> npm install webpack --save-dev

### 配置文件webpack.config.js
> 通常每个项目都应该配置webpack.config.js文件（作用：告诉webpack它需要作的所有事情和如何去做）

**重点:什么是入口文件？** 模块打包的起点称之为入口起点（entry point）。入口起点告诉webpack从哪里开始，并遵循着依赖关系进行打包。可以将您的应用入口起点认为是根上下文（contextual root）或app第一个启动文件。

> 安装live-server,只要用npm install就可以安装了,实时更新，提高效率。
>
>> npm install live-server -g
>
> 用时，进入项目，然后敲入命令：live-server

### live-server服务器介绍：
> live-server是一款简单的开发用的Http服务器。特点就是在你静态文件进行修改后，有自动加载的功能。
> 
> 使用它主要有两个原因：
>
> - 对Ajax的操作必须要有服务器的支持，比如用javascript去获取内容。
>
> - 浏览器的自动更新，可以加快开发。你不需要安装任何浏览器插件或手动添加代码片段到您的网页代码里。

### webpack配置多路口文件

当我们需要时webpack 是允许我们有多个输出文件的。也就是说，我们可以在html文件中引入2个js文件或者其他的文件。

### 使用Webpack CSS  loader加载器
> 什么是 loader
>
> > loader用于转换应用程序的资源文件，他们是运行在nodejs下的函数，使用参数来获取一个资源的来源并且返回一个新的来源（资源的位置），例如：你可以使用loader来告诉webpack去加载一个coffeeScript或者Babel文件。
>
> loader 的解析
>
> > loader的解析类似模块，一个loader模块会导出一个方法并且可被nodejs写为可兼容的JavaScript,通常情况下通过npm来管理loader,但你也可以把loader放在自己的应用里。
>
> 安装loader
> 
> > 通过npm来安装loader: $ npm install xxx-loader --save-dev 或者 $ npm install xxx-loader --save
> 
> 例如：进入项目，敲入：npm install style-loader --save-dev 和 npm install css-loader --save-dev
>
这样就用webpack的加载器成功打包了css样式文件。以后我们的html里就可以不用看到css的引入语句了。

### 使用webpack Image loader 加载图片
>
> npm init //生成package.json 文件
>
> npm install url-loader --save-dev
>
> npm install file-loader --save-dev

### 压缩文件
> npm init
>
> npm install webpack --save-dev
>
> npm install uglify-js g
> 
> webpack

### 使用webpack构建本地服务器
> 安装webpack-dev-server
>
> 本地依赖:
>
> npm install --save-dev webpack-dev-server
>
> 全局安装：
>
> npm install -g webpack-dev-server

在webpack.config.js中配置devserver选项：

- contentBase : 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录。
- port ：设置默认监听端口，如果省略，默认为”8080″
- inline : 设置为true，当源文件改变时会自动刷新页面
- colors ： 设置为true，使终端输出的文件为彩色的
- historyApiFallback ：在开发单页时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
- host ： 主机地址，如果是开发本机搭建，需要使用本机IP地址，否则会报错。

在终端中输入命令，开启运行本地服务器。它不仅提供了服务器，还会监视我们的文件变化自动更新效果，但是它不是真正的打包，它类似于在内存中进行了打包。所以本地文件并没有变化。

>  webpack-dev-server

其实webpack构建服务器才是正道，如果你使用了webpack，那么尽量使用webpack-dev-server吧，这能大大提高您的工作效率。

