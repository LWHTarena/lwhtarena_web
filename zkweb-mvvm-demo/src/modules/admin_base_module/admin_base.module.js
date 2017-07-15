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
import { GrowlModule } from 'primeng/components/growl/growl';
import { SlideMenuModule } from 'primeng/components/slidemenu/slidemenu';
import { BaseModule } from '../base_module/base.module';
import { GeneratedModule } from '../generated_module/generated.module';
import { AdminContainerComponent } from './components/admin-container.component';
import { AdminToastService } from './services/admin-toast-service';
var AdminBaseModule = (function () {
    function AdminBaseModule() {
    }
    return AdminBaseModule;
}());
AdminBaseModule = __decorate([
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
            GrowlModule,
            SlideMenuModule,
            BaseModule,
            GeneratedModule,
            RouterModule
        ],
        declarations: [
            AdminContainerComponent,
        ],
        providers: [
            AdminToastService
        ],
        exports: [
            RouterModule,
            AdminContainerComponent
        ]
    })
], AdminBaseModule);
export { AdminBaseModule };
//# sourceMappingURL=admin_base.module.js.map