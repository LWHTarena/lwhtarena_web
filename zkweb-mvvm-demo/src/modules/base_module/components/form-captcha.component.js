var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter } from '@angular/core';
import { FormFieldBaseComponent } from './form-field-base.component';
import { CaptchaService } from '../../generated_module/services/captcha-service';
import { AppTranslationService } from '../../base_module/services/app-translation-service';
var FormCaptchaComponent = (function (_super) {
    __extends(FormCaptchaComponent, _super);
    function FormCaptchaComponent(appTranslationService, captchaService) {
        var _this = _super.call(this, appTranslationService) || this;
        _this.captchaService = captchaService;
        _this.captchaGridWidth = 3;
        return _this;
    }
    FormCaptchaComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        // 加载时刷新验证码
        this.refreshCaptcha();
        // 外部刷新验证码
        if (this.captchaRefreshEvent) {
            this.captchaRefreshEvent.subscribe(function (_) { return _this.refreshCaptcha(); });
        }
    };
    /** 刷新验证码 */
    FormCaptchaComponent.prototype.refreshCaptcha = function () {
        var _this = this;
        this.captchaImageBase64 = null;
        this.captchaLoadingText = this.appTranslationService.translate("Loading");
        this.captchaService.GetCaptchaImageBase64(this.captchaKey).subscribe(function (s) { return _this.captchaImageBase64 = s; }, function (e) { return _this.captchaLoadingText = _this.appTranslationService.translate("Load Failed"); });
    };
    return FormCaptchaComponent;
}(FormFieldBaseComponent));
__decorate([
    Input(),
    __metadata("design:type", String)
], FormCaptchaComponent.prototype, "captchaKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], FormCaptchaComponent.prototype, "captchaGridWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], FormCaptchaComponent.prototype, "captchaRefreshEvent", void 0);
FormCaptchaComponent = __decorate([
    Component({
        selector: 'z-form-captcha',
        templateUrl: '../views/form-captcha.html',
        host: { 'class': 'ui-grid-row' }
    }),
    __metadata("design:paramtypes", [AppTranslationService,
        CaptchaService])
], FormCaptchaComponent);
export { FormCaptchaComponent };
//# sourceMappingURL=form-captcha.component.js.map