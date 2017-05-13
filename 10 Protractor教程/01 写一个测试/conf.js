/**
 * Created by Administrator on 2016/12/24.
 * 这个配置告诉Protractor测试文件（specs）在哪里，以及在哪里与Selenium服务器（seleniumAddress）交谈。它将使用所有其他配置的默认值。 Chrome是默认浏览器。
 */

exports.config ={
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js']
}


