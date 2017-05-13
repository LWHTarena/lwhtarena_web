# Protractor 
Protractor 专门为angular的端对端测试

## npm install -g protractor

这将安装两个命令行工具，Protractor 和 webdriver-manager。尝试运行 Protractor--version 以确保它的工作。

webdriver-manager是一个帮助工具，可以轻松获取运行Selenium Server的实例。使用它下载必要的二进制文件：
<h4>webdriver-manager update</h4>
<h4>webdriver-manager start</h4>

### Protractor是AngularJS应用程序的端到端测试框架。Protractor对在真实浏览器中运行的应用程序运行测试，与用户进行交互。

【特征】

    Protractor构建在WebDriverJS之上，它使用本机事件和浏览器特定的驱动程序与用户应用程序交互。
    
    Protractor支持角度特定的定位器策略，这允许您测试angular特定的元素，而无需您的任何设置工作。
    
    
    你不再需要添加等待和睡眠，你的测试。Protractor可以在网页完成待处理任务的时候自动执行测试中的下一步，因此您不必担心等待测试和网页同步。

##写一个测试
需要两个文件：一个 spec文件和一个配置文件。

【案例：】
让我们开始一个简单的测试，导航到AngularJS网站中的todo列表示例，并向列表中添加一个新的todo项。

最后Run the 测试文件
> protractor conf.js

运行结果：

您应该会看到一个Chrome浏览器窗口打开，并导航到AnglarJS页面中的待办事项列表，然后关闭自己（这应该是非常快！）。
测试输出应为1个测试，3个断言，0个失败。恭喜，您已经运行了第一个protracto测试！

