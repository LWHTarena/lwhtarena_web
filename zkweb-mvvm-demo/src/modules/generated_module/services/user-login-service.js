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
import { AppApiService } from '../../base_module/services/app-api-service';
var UserLoginService = (function () {
    function UserLoginService(appApiService) {
        this.appApiService = appApiService;
    }
    /** 登录用户 */
    UserLoginService.prototype.LoginUser = function (request) {
        return this.appApiService.call("/api/UserLoginService/LoginUser", {
            request: request
        });
    };
    /** 登录管理员 */
    UserLoginService.prototype.LoginAdmin = function (request) {
        return this.appApiService.call("/api/UserLoginService/LoginAdmin", {
            request: request
        });
    };
    return UserLoginService;
}());
UserLoginService = __decorate([
    Injectable()
    /** 用户登录服务 */
    ,
    __metadata("design:paramtypes", [AppApiService])
], UserLoginService);
export { UserLoginService };
//# sourceMappingURL=user-login-service.js.map