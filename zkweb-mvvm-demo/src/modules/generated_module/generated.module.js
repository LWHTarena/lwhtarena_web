var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BaseModule } from '../base_module/base.module';
import { CaptchaService } from './services/captcha-service';
import { RoleManageService } from './services/role-manage-service';
import { SessionService } from './services/session-service';
import { TenantManageService } from './services/tenant-manage-service';
import { UserLoginService } from './services/user-login-service';
import { UserManageService } from './services/user-manage-service';
import { UserProfileService } from './services/user-profile-service';
import { WebsiteManageService } from './services/website-manage-service';
import { ExampleDataManageService } from './services/example-data-manage-service';
var GeneratedModule = (function () {
    function GeneratedModule() {
    }
    return GeneratedModule;
}());
GeneratedModule = __decorate([
    NgModule({
        imports: [BaseModule],
        providers: [
            CaptchaService,
            RoleManageService,
            SessionService,
            TenantManageService,
            UserLoginService,
            UserManageService,
            UserProfileService,
            WebsiteManageService,
            ExampleDataManageService
        ]
    })
], GeneratedModule);
export { GeneratedModule };
//# sourceMappingURL=generated.module.js.map