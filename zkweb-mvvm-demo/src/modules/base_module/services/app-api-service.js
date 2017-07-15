var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishLast';
import { AppConfigService } from './app-config-service';
// 调用远程Api的服务
var AppApiService = (function () {
    function AppApiService(http, appConfigService) {
        var _this = this;
        this.http = http;
        this.appConfigService = appConfigService;
        // 全局Url过滤器
        this.urlFilters = [];
        // 全局选项过滤器
        this.optionsFilters = [];
        // 全局内容过滤器
        this.bodyFilters = [];
        // 全局结果过滤器
        this.resultFilters = [];
        // 全局错误过滤器
        this.errorFilters = [];
        // 设置http头
        this.registerOptionsFilter(function (options) {
            // 让服务端把请求当作ajax请求
            options.headers.append("X-Requested-With", "XMLHttpRequest");
            // 设置当前语言
            options.headers.append(_this.appConfigService.getLanguageHeader(), _this.appConfigService.getLanguage());
            // 设置当前时区
            options.headers.append(_this.appConfigService.getTimezoneHeader(), _this.appConfigService.getTimezone());
            // 附上会话Id
            options.headers.append(_this.appConfigService.getSessionIdHeader(), _this.appConfigService.getSessionId());
            return options;
        });
        // 如果内容包含文件对象则转换为FormData
        this.registerBodyFilter(function (body) {
            var formData = new FormData();
            // 设置最外层的参数
            for (var key in body) {
                if (body.hasOwnProperty(key)) {
                    formData.append(key, JSON.stringify(body[key]));
                }
            }
            // 枚举里层检测是否有文件对象
            var fileCount = 0;
            var visitor = function (obj) {
                // console.log("visit", obj);
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        var value = obj[key];
                        if (value instanceof File) {
                            // 名称用原来的key，请注意重复
                            formData.append(key, value);
                            fileCount += 1;
                        }
                        else if (value instanceof Object && value !== obj) {
                            // 检测子对象
                            visitor(value);
                        }
                    }
                }
            };
            visitor(body);
            // 有文件对象时返回FormData，否则返回原来的Body
            return (fileCount > 0) ? formData : body;
        });
        // 过滤回应
        this.registerResultFilter(function (response) {
            // 解析返回的会话Id
            var newSessionId = response.headers.get(_this.appConfigService.getSessionIdSetHeader());
            if (newSessionId) {
                _this.appConfigService.setSessionId(newSessionId);
            }
            return response;
        });
        // 设置默认的结果转换器
        this.setResultConverter(function (response) {
            try {
                // 尝试使用json解析
                return response.json();
            }
            catch (e) {
                // 失败时返回字符串
                return response.text();
            }
        });
        // 设置默认的错误转换器
        this.setErrorConverter(function (error) {
            console.log("api request error:", error);
            var errorMessage;
            if (error instanceof Response) {
                if (error.status === 0) {
                    // 网络错误时显示特殊信息
                    errorMessage = "Network error, please check your internet connection";
                }
                else {
                    // 返回过滤html标签后的文本
                    errorMessage = error.text().replace(/<[^>]+>/g, "");
                }
            }
            else {
                // 返回错误对象的json
                errorMessage = JSON.stringify(error);
            }
            return new Observable(function (o) {
                o.error(errorMessage);
                o.complete();
            });
        });
    }
    // 注册全局Url过滤器
    AppApiService.prototype.registerUrlFilter = function (filter) {
        this.urlFilters.push(filter);
    };
    // 注册全局选项过滤器
    AppApiService.prototype.registerOptionsFilter = function (filter) {
        this.optionsFilters.push(filter);
    };
    // 注册全局内容过滤器
    AppApiService.prototype.registerBodyFilter = function (filter) {
        this.bodyFilters.push(filter);
    };
    // 注册全局结果过滤器
    AppApiService.prototype.registerResultFilter = function (filter) {
        this.resultFilters.push(filter);
    };
    // 注册全局错误过滤器
    AppApiService.prototype.registerErrorFilter = function (filter) {
        this.errorFilters.push(filter);
    };
    // 设置默认结果转换器
    AppApiService.prototype.setResultConverter = function (converter) {
        this.resultConverter = converter;
    };
    // 获取默认结果转换器
    AppApiService.prototype.getResultConverter = function () {
        return this.resultConverter;
    };
    // 设置默认错误转换器
    AppApiService.prototype.setErrorConverter = function (converter) {
        this.errorConverter = converter;
    };
    // 获取默认错误转换器
    AppApiService.prototype.getErrorConverter = function () {
        return this.errorConverter;
    };
    // 调用Api函数
    AppApiService.prototype.call = function (url, body, options, resultConverter, errorConverter) {
        var _this = this;
        // 构建完整url，可能不在同一个host
        var fullUrl = this.appConfigService.getApiUrlBase() + url;
        this.urlFilters.forEach(function (h) { fullUrl = h(fullUrl); });
        // 构建选项，包括http头等
        options = options || { method: "POST" };
        options.headers = options.headers || new Headers();
        this.optionsFilters.forEach(function (h) { options = h(options); });
        // 构建提交内容
        this.bodyFilters.forEach(function (h) { body = h(body); });
        options.body = body;
        return this.http
            .request(fullUrl, options) // 提交api
            .publishLast().refCount() // 防止多次subscribe导致多次提交
            .map(function (response) {
            // 过滤返回的结果
            _this.resultFilters.forEach(function (f) { response = f(response); });
            // 转换返回的结果
            return (resultConverter || _this.resultConverter)(response);
        })
            .catch(function (error) {
            // 过滤返回的错误
            _this.errorFilters.forEach(function (f) { error = f(error); });
            // 转换返回的错误
            return (errorConverter || _this.errorConverter)(error);
        });
    };
    return AppApiService;
}());
AppApiService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        AppConfigService])
], AppApiService);
export { AppApiService };
//# sourceMappingURL=app-api-service.js.map