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
import { AppConfigService } from '../../base_module/services/app-config-service';
import { AppTranslationService } from '../../base_module/services/app-translation-service';
import { WebsiteManageService } from '../../generated_module/services/website-manage-service';
import { WebsiteInfoOutputDto } from '../../generated_module/dtos/website-info-output-dto';
import { AdminToastService } from '../../admin_base_module/services/admin-toast-service';
var AdminAboutWebsiteComponent = (function () {
    function AdminAboutWebsiteComponent(appConfigService, appTranslationService, websiteManagerService, adminToastService) {
        this.appConfigService = appConfigService;
        this.appTranslationService = appTranslationService;
        this.websiteManagerService = websiteManagerService;
        this.adminToastService = adminToastService;
        this.websiteInfo = new WebsiteInfoOutputDto();
        this.websiteInfo.Plugins = [];
    }
    AdminAboutWebsiteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.language = this.appTranslationService.translate(this.appConfigService.getLanguage());
        this.timezone = this.appTranslationService.translate(this.appConfigService.getTimezone());
        this.apiUrlBase = this.appConfigService.getApiUrlBase();
        this.websiteManagerService.GetWebsiteInfo().subscribe(function (s) { return _this.websiteInfo = s; }, function (e) { return _this.adminToastService.showToastMessage("error", e); });
    };
    return AdminAboutWebsiteComponent;
}());
AdminAboutWebsiteComponent = __decorate([
    Component({
        selector: 'admin-about-website',
        templateUrl: '../views/admin-about-website.html'
    }),
    __metadata("design:paramtypes", [AppConfigService,
        AppTranslationService,
        WebsiteManageService,
        AdminToastService])
], AdminAboutWebsiteComponent);
export { AdminAboutWebsiteComponent };
//# sourceMappingURL=admin-about-website.component.js.map