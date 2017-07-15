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
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppConfigService } from '../../base_module/services/app-config-service';
import { AppTranslationService } from '../../base_module/services/app-translation-service';
import { AppSessionService } from '../services/app-session-service';
import { AppPrivilegeService } from '../services/app-privilege-service';
/** 用于给路由检查权限
    例:
    {
        path: 'example',
        component: ExampleComponent,
        canActivate: [AuthGuard],
        data: {
            auth: {
                requireMasterTenant: false,
                requireUserType: 'ICanUseAdminPanel',
                requirePrivileges: ['Example:Edit']
            }
        }
    } */
var AuthGuard = (function () {
    function AuthGuard(router, appConfigService, appTranslationService, appSessionService, appPrivilegeService) {
        this.router = router;
        this.appConfigService = appConfigService;
        this.appTranslationService = appTranslationService;
        this.appSessionService = appSessionService;
        this.appPrivilegeService = appPrivilegeService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return new Observable(function (o) {
            _this.appSessionService.getSessionInfo().subscribe(function (sessionInfo) {
                // 检查权限
                var routeData = route.data || {};
                var user = sessionInfo.User;
                var auth = routeData["auth"];
                var checkResult = _this.appPrivilegeService.isAuthorized(user, auth);
                // 检查失败时跳转到登录页面
                if (!checkResult.success) {
                    if (checkResult.errorMessage) {
                        alert(checkResult.errorMessage);
                    }
                    _this.router.navigate(_this.appConfigService.getLoginUrl());
                }
                o.next(checkResult.success);
                o.complete();
            }, function (error) {
                alert(error);
                _this.router.navigate(_this.appConfigService.getLoginUrl());
                o.next(false);
                o.complete();
            });
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Router,
        AppConfigService,
        AppTranslationService,
        AppSessionService,
        AppPrivilegeService])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth-guard.js.map