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
/** 保存全局配置的服务 */
var AppConfigService = (function () {
    function AppConfigService() {
        var appConfig = window["appConfig"] || {};
        this.apiUrlBase = appConfig.apiUrlBase ||
            (location.protocol + "//" + location.host);
        this.language = appConfig.language || null;
        this.defaultLanguage = appConfig.defaultLnaguage || "zh-CN";
        this.languageHeader = appConfig.languageHeader || "X-ZKWeb-Language";
        this.languageKey = appConfig.languageKey || "ZKWeb-Language";
        this.timezone = appConfig.timezone || null;
        this.defaultTimezone = appConfig.defaultTimezone || "Asia/Shanghai";
        this.timezoneHeader = appConfig.timezoneHeader || "X-ZKWeb-Timezone";
        this.timezoneKey = appConfig.timezoneKey || "ZKWeb-Timezone";
        this.loginUrl = appConfig.loginUrl || ["/admin", "login"];
        this.sessionIdHeader = appConfig.sessionIdHeader || "X-ZKWeb-SessionId";
        this.sessionIdSetHeader = appConfig.sessionIdSetHeader || "X-Set-ZKWeb-SessionId";
        this.sessionIdKey = appConfig.sessionIdKey || "ZKWeb-SessionId";
    }
    /** 获取Api的基础地址 */
    AppConfigService.prototype.getApiUrlBase = function () {
        return this.apiUrlBase;
    };
    /** 获取当前使用的语言 */
    AppConfigService.prototype.getLanguage = function () {
        if (!this.language) {
            this.language = localStorage.getItem(this.languageKey) || this.defaultLanguage;
        }
        return this.language;
    };
    /** 设置当前使用的语言 */
    AppConfigService.prototype.setLanguage = function (language) {
        this.language = language;
        localStorage.setItem(this.languageKey, language);
    };
    // 获取客户端传给服务端使用的语言头
    AppConfigService.prototype.getLanguageHeader = function () {
        return this.languageHeader;
    };
    // 获取当前使用的时区
    AppConfigService.prototype.getTimezone = function () {
        if (!this.timezone) {
            this.timezone = localStorage.getItem(this.timezoneKey) || this.defaultTimezone;
        }
        return this.timezone;
    };
    /** 设置当前使用的时区 */
    AppConfigService.prototype.setTimezone = function (timezone) {
        this.timezone = timezone;
        localStorage.setItem(this.timezoneKey, timezone);
    };
    // 获取客户端传给服务端使用的语言头
    AppConfigService.prototype.getTimezoneHeader = function () {
        return this.timezoneHeader;
    };
    // 获取登录地址
    AppConfigService.prototype.getLoginUrl = function () {
        return this.loginUrl;
    };
    // 获取当前会话Id
    AppConfigService.prototype.getSessionId = function () {
        if (!this.sessionId) {
            this.sessionId = localStorage.getItem(this.sessionIdKey);
        }
        // console.log("get session:", this.sessionId);
        return this.sessionId;
    };
    // 设置当前会话Id
    AppConfigService.prototype.setSessionId = function (sessionId) {
        // console.log("set session:", sessionId);
        this.sessionId = sessionId;
        localStorage.setItem(this.sessionIdKey, sessionId);
    };
    // 获取客户端传给服务端使用的会话Id头
    AppConfigService.prototype.getSessionIdHeader = function () {
        return this.sessionIdHeader;
    };
    // 获取服务端传给客户端使用的会话Id头
    AppConfigService.prototype.getSessionIdSetHeader = function () {
        return this.sessionIdSetHeader;
    };
    return AppConfigService;
}());
AppConfigService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], AppConfigService);
export { AppConfigService };
//# sourceMappingURL=app-config-service.js.map