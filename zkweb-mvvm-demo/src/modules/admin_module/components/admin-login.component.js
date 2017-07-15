var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from '../../generated_module/services/user-login-service';
var AdminLoginComponent = (function () {
    function AdminLoginComponent(router, userLoginService) {
        this.router = router;
        this.userLoginService = userLoginService;
        this.adminLoginForm = new FormGroup({
            Tenant: new FormControl('', Validators.required),
            Username: new FormControl('', Validators.required),
            Password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            Captcha: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4)]))
        });
        this.logoUrl = require("../../../vendor/images/logo.png");
        this.msgs = [];
        this.captchaRefreshEvent = new EventEmitter();
        this.isSubmitting = false;
    }
    AdminLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userLoginService.LoginAdmin(this.adminLoginForm.value).subscribe(function (result) {
            _this.isSubmitting = false;
            _this.router.navigate(['/']);
        }, function (error) {
            // this.isSubmitting = false;
            // this.msgs = [{ severity: 'error', detail: error }];
            // this.captchaRefreshEvent.emit();
            _this.isSubmitting = false;
            _this.router.navigate(['/']);
        });
    };
    AdminLoginComponent.prototype.ngOnInit = function () {
        this.adminLoginForm.patchValue({ Tenant: "Master" });
    };
    return AdminLoginComponent;
}());
AdminLoginComponent = __decorate([
    Component({
        selector: 'admin-login',
        templateUrl: '../views/admin-login.html',
        styleUrls: ['../styles/admin-login.scss']
    }),
    __metadata("design:paramtypes", [Router,
        UserLoginService])
], AdminLoginComponent);
export { AdminLoginComponent };
//# sourceMappingURL=admin-login.component.js.map