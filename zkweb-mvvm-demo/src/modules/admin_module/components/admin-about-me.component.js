var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppTranslationService } from '../../base_module/services/app-translation-service';
import { AppSessionService } from '../../auth_module/services/app-session-service';
import { AppPrivilegeService } from '../../auth_module/services/app-privilege-service';
import { UserProfileService } from '../../generated_module/services/user-profile-service';
var AdminAboutMeComponent = (function () {
    function AdminAboutMeComponent(appTranslationService, appSessionService, appPrivilegeService, userProfileService) {
        this.appTranslationService = appTranslationService;
        this.appSessionService = appSessionService;
        this.appPrivilegeService = appPrivilegeService;
        this.userProfileService = userProfileService;
        this.roles = [];
        this.privileges = [];
        this.msgs = [];
        this.isSubmitting = false;
        this.changePasswordForm = new FormGroup({
            OldPassword: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            NewPassword: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            ConfirmNewPassword: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
        });
        this.avatarUploadForm = new FormGroup({
            Avatar: new FormControl('', Validators.required),
        });
    }
    AdminAboutMeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appSessionService.getSessionInfo().subscribe(function (s) {
            _this.tenant = s.User.OwnerTenantName;
            _this.username = s.User.Username;
            _this.userType = _this.appTranslationService.translate(s.User.Type);
            _this.roles = s.User.Roles.map(function (r) { return r.Name; });
            _this.privileges = s.User.Privileges.map(function (p) { return _this.appPrivilegeService.translatePrivilege(p); });
        }, function (e) { return _this.msgs = [{ severity: "error", detail: e }]; });
    };
    AdminAboutMeComponent.prototype.onChangePassword = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userProfileService.ChangePassword(this.changePasswordForm.value).subscribe(function (s) {
            _this.msgs = [{ severity: "info", detail: s.Message }];
            _this.isSubmitting = false;
        }, function (e) {
            _this.msgs = [{ severity: "error", detail: e }];
            _this.isSubmitting = false;
        });
    };
    AdminAboutMeComponent.prototype.onUploadAvatar = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userProfileService.UploadAvatar(this.avatarUploadForm.value).subscribe(function (s) {
            _this.msgs = [{ severity: "info", detail: s.Message }];
            _this.isSubmitting = false;
        }, function (e) {
            _this.msgs = [{ severity: "error", detail: e }];
            _this.isSubmitting = false;
        });
    };
    return AdminAboutMeComponent;
}());
AdminAboutMeComponent = __decorate([
    Component({
        selector: 'admin-about-me',
        templateUrl: '../views/admin-about-me.html'
    }),
    __metadata("design:paramtypes", [AppTranslationService,
        AppSessionService,
        AppPrivilegeService,
        UserProfileService])
], AdminAboutMeComponent);
export { AdminAboutMeComponent };
//# sourceMappingURL=admin-about-me.component.js.map