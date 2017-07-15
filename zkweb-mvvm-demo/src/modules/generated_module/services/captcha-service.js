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
var CaptchaService = (function () {
    function CaptchaService(appApiService) {
        this.appApiService = appApiService;
    }
    /** 获取验证码图片的Base64 */
    CaptchaService.prototype.GetCaptchaImageBase64 = function (key) {
        return this.appApiService.call("/api/CaptchaService/GetCaptchaImageBase64", {
            key: key
        });
    };
    return CaptchaService;
}());
CaptchaService = __decorate([
    Injectable()
    /** 验证码服务 */
    ,
    __metadata("design:paramtypes", [AppApiService])
], CaptchaService);
export { CaptchaService };
//# sourceMappingURL=captcha-service.js.map