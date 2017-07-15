"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { enableProdMode } from '@angular/core';
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./modules/app_module/app.module");
// 启用生产模式可以取消注释以下行
// enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
