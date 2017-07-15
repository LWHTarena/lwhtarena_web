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
import { Observable } from 'rxjs/Observable';
import { SessionService } from '../../generated_module/services/session-service';
import { AppConfigService } from '../../base_module/services/app-config-service';
/** 获取会话信息的服务 */
var AppSessionService = (function () {
    function AppSessionService(appConfigService, sessionService) {
        this.appConfigService = appConfigService;
        this.sessionService = sessionService;
        this.domSessionIdKey = "appSessionId";
        this.domSessionInfoKey = "appSessionInfo";
        console.log("create app session service");
    }
    /** 获取当前的会话信息 */
    AppSessionService.prototype.getSessionInfo = function () {
        var _this = this;
        // 从DOM中获取保存的会话Id和会话信息
        // Angular中无法实现懒加载 + 跨路由的单例，想要防止重复获取只能借助DOM
        // http://stackoverflow.com/questions/37967182/angular2-service-reinstantiated-when-changing-route
        // http://stackoverflow.com/questions/40981306/service-is-not-being-singleton-for-angular2-router-lazy-loading-with-loadchildre
        // https://github.com/angular/angular/issues/11125
        if (window[this.domSessionIdKey] && window[this.domSessionInfoKey]) {
            this.sessionId = window[this.domSessionIdKey];
            this.sessionInfo = window[this.domSessionInfoKey];
        }
        // 如果本地已有会话信息则直接返回
        var newSessionId = this.appConfigService.getSessionId();
        if (newSessionId === this.sessionId && this.sessionInfo) {
            return new Observable(function (o) {
                o.next(_this.sessionInfo);
                o.complete();
            });
        }
        // 调用api重新获取
        var observable = this.sessionService.GetSessionInfo();
        observable.subscribe(function (result) {
            _this.sessionId = newSessionId;
            _this.sessionInfo = result;
            window[_this.domSessionIdKey] = newSessionId;
            window[_this.domSessionInfoKey] = result;
        });
        return observable;
    };
    return AppSessionService;
}());
AppSessionService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AppConfigService,
        SessionService])
], AppSessionService);
export { AppSessionService };
//# sourceMappingURL=app-session-service.js.map