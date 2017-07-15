var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../base_module/base.module';
import { GeneratedModule } from '../generated_module/generated.module';
import { AuthGuard } from './auth/auth-guard';
import { AppPrivilegeService } from './services/app-privilege-service';
import { AppSessionService } from './services/app-session-service';
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            BaseModule,
            GeneratedModule
        ],
        providers: [
            AuthGuard,
            AppPrivilegeService,
            AppSessionService
        ]
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map