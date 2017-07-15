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
import { WebsiteManageService } from '../../generated_module/services/website-manage-service';
var AdminWebsiteSettingsComponent = (function () {
    function AdminWebsiteSettingsComponent(websiteManageService) {
        this.websiteManageService = websiteManageService;
        this.msgs = [];
        this.isSubmitting = false;
        this.websiteSettingsForm = new FormGroup({
            WebsiteName: new FormControl('', Validators.required),
        });
    }
    AdminWebsiteSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.websiteSettingsForm.reset();
        this.websiteManageService.GetWebsiteSettings().subscribe(function (s) { return _this.websiteSettingsForm.patchValue(s); }, function (e) { return _this.msgs = [{ severity: "error", detail: e }]; });
    };
    AdminWebsiteSettingsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitting = true;
        this.websiteManageService.SaveWebsiteSettings(this.websiteSettingsForm.value).subscribe(function (s) {
            _this.msgs = [{ severity: "info", detail: s.Message }];
            _this.isSubmitting = false;
        }, function (e) {
            _this.msgs = [{ severity: "error", detail: e }];
            _this.isSubmitting = true;
        });
    };
    return AdminWebsiteSettingsComponent;
}());
AdminWebsiteSettingsComponent = __decorate([
    Component({
        selector: 'admin-website-settings',
        templateUrl: '../views/admin-website-settings.html',
    }),
    __metadata("design:paramtypes", [WebsiteManageService])
], AdminWebsiteSettingsComponent);
export { AdminWebsiteSettingsComponent };
//# sourceMappingURL=admin-website-settings.component.js.map