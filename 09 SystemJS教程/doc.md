
## 前端开发要解决两个问题

### 1、开发阶段

 要解决：
    
   - 第三方包安装、使用、依赖关系的维护
> 包管理器
> 传统做法：
>
>> 1、下载jquery.min.js文件，保存到js目录
>>
>> 2、在 HTML 文件中使用 script 标签引用 jquery (jQuery 不依赖其它库，所以相对来说，上面的操作还算简单)
>
> 包管理器做法：(封装细节，自动化构建)
>>
>> 1、使用jQuery ： bower install jquery
>>
>> 2、使用Bootstrap ： brower install bootstrap
>>
>> 3、如果不想依赖bootstarp ：bower uninstall bootstrap //卸载

类似brower 的还有duojs、jspm、npm等

> 加载器

目前 ES6 模块的标准还没在浏览器中得到完全落实，过渡期间我们有许多规范或不规范的模块：
 
      CommonJS
      AMD
      ES6 Modules
      命名空间方式定义
      其它
      
如果只使用单一规范，比如针对 AMD，我们可能会用 RequireJS；ES6 的模块，我们可能会用到 ES6 Module Loader Polyfill；CommonJS 规范的模块，我们可能用 SystemJS – 它同样可用于加载 AMD/ES6 模块。
>> CSS 加载器
    
   - 自有代码的依赖关系维护及使用
   

    
### 2、部署阶段