var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { MessagesModule } from 'primeng/components/messages/messages';
import { BlockUIModule } from 'primeng/components/blockui/blockui';
import { BaseModule } from '../base_module/base.module';
import { GeneratedModule } from '../generated_module/generated.module';
import { AuthModule } from '../auth_module/auth.module';
import { AdminBaseModule } from '../admin_base_module/admin_base.module';
import { AuthGuard } from '../auth_module/auth/auth-guard';
import { UserTypes } from '../generated_module/privileges/user-types';
import { Privileges } from '../generated_module/privileges/privileges';
import { AdminWebsiteSettingsComponent } from './components/admin-website-settings.component';
var routes = [
    { path: '', redirectTo: 'website_settings', pathMatch: 'full' },
    {
        path: 'website_settings',
        component: AdminWebsiteSettingsComponent,
        canActivate: [AuthGuard],
        data: {
            auth: {
                requireUserType: UserTypes.IAmAdmin,
                requirePrivileges: [Privileges.Settings_WebsiteSettings]
            }
        }
    }
];
var AdminSettingsModule = (function () {
    function AdminSettingsModule() {
    }
    return AdminSettingsModule;
}());
AdminSettingsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            InputTextModule,
            PanelModule,
            ButtonModule,
            MessagesModule,
            BlockUIModule,
            BaseModule,
            GeneratedModule,
            AuthModule,
            AdminBaseModule,
            RouterModule.forChild(routes)
        ],
        declarations: [
            AdminWebsiteSettingsComponent,
        ],
        exports: [
            RouterModule
        ]
    })
], AdminSettingsModule);
export { AdminSettingsModule };
//# sourceMappingURL=admin_settings.module.js.map