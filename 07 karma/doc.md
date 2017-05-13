# 前端自动化测试之路——karma

Karma主要设计用来做低层级的测试（单元测试）。如果你想做高层级测试，我们推荐使用protractor

## 入门
>
> Karma构建在Node.js之上，以npm包形式安装（建议到项目目录中，局部安装Karma及插件）
>
> npm install karma --save-dev (安装Karma)
>
> npm install karma-jasmine karma-chrome-launcher --save-dev (安装项目所需插件) 

   
    上面的命令会安装karma, karma-jasmine 和 karma-chrome-launcher包到你当前工作目录中
    node_modules文件夹中，并把这些包名保存到package.json 里的devDependencies 。这样该
    项目的其他开发者只需运行npm install 就可以安装这些依赖。
    
> 运行 Karma:
>> ./node_modules/karma/bin/karma start
>
> 命令行接口:

    每次运行karma都需要输入./node_modules/karma/bin/karma start太逊了，所以全局安装karma-cli会很有用
>> $ npm install -g karma-cli (接下来你只需输入karma就可以随处运行karma了)
>
> 生成配置文件: (使用karma init生成配置文件)

        $ karma init my.conf.js
        
        Which testing framework do you want to use ?
        Press tab to list possible options. Enter to move to the next question.
        > jasmine
        
        Do you want to use Require.js ?
        This will add Require.js plugin.
        Press tab to list possible options. Enter to move to the next question.
        > no
        
        Do you want to capture a browser automatically ?
        Press tab to list possible options. Enter empty string to move to the next question.
        > Chrome
        > Firefox
        >
        
        What is the location of your source and test files ?
        You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
        Enter empty string to move to the next question.
        > *.js
        > test/**/*.js
        >
        
        Should any of the files included by the previous patterns be excluded ?
        You can use glob patterns, eg. "**/*.swp".
        Enter empty string to move to the next question.
        >
        
        Do you want Karma to watch all the files and run the tests on change ?
        Press tab to list possible options.
        > yes
        
        Config file generated at "/Users/vojta/Code/karma/my.conf.js".
        
   
   配置文件可以用CoffeeScript来写。事实上，如果你运行karma init，后面跟着一个*.coffee扩展名，例如：karma init karma.conf.coffee,就会生成一个CoffeeScript文件。
        
   当然你也可以手写配置文件，或从其他项目拷贝配置文件。
> 启动karam （当启动Karma时，配置文件的路径可以作为第一个参数）
>
> 默认情况下，karma会在当前目录中寻找karma.conf.js 或者 karma.conf.coffee

        # Start Karma using your configuration:
        $ karma start my.conf.js

>命令行参数
>
>当执行karma时，配置文件中已有的一些配置项，可以被命令行参数重写
> 
> karma start my.conf.js --log-level debug --single-run

> 如果您想知道都有哪些可用选项，运行karma start --help
> 

## karma配置
> Karma配置文件以Node.js模块方式被加载。

        // karma.conf.js
          module.exports = function(config) {
            config.set({
              basePath: '../..',
              frameworks: ['jasmine'],
              //...
            });
          };
          # karma.conf.coffee
          module.exports = (config) ->
            config.set
              basePath: '../..'
              frameworks: ['jasmine']
              # ...

> 文件的模式 （File Patterns）
>
> 所有需要指定文件路径的配置选项，都是用minimatch库，方便你轻松的列出需要包含和剔除的文件
>
> 例如：

         **/*.js: 所有子目录中以js结尾的文件
         **/!(jquery).js: 同上, 但是不包括 “jquery.js”
         **/(foo|bar).js: 所有子目录中, 所有 “foo.js” 或 “bar.js” 文件
         
>