/**
 * Created by Administrator on 2016/12/24.
 */

// conf.js
// exports.config = {
//     framework: 'jasmine',
//     seleniumAddress: 'http://localhost:4444/wd/hub',
//     specs: ['spec.js']
// }

// 步骤3：conf.js  更改配置
// exports.config = {
//     framework: 'jasmine',
//     seleniumAddress: 'http://localhost:4444/wd/hub',
//     specs: ['spec.js'],
//     capabilities: {
//         browserName: 'firefox'
//     }
// }

// 步骤3：conf.js  更改配置
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]
}