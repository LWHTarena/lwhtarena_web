var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';
import { ButtonModule } from 'primeng/components/button/button';
import { FormGridComponent } from './components/form-grid.component';
import { FormValidationMessagesComponent } from './components/form-validation-messages.component';
import { FormTextComponent } from './components/form-text.component';
import { FormTextAreaComponent } from './components/form-textarea.component';
import { FormDropdownComponent } from './components/form-dropdown.component';
import { FormMultiSelectComponent } from './components/form-multiselect.component';
import { FormHiddenComponent } from './components/form-hidden.component';
import { FormPasswordComponent } from './components/form-password.component';
import { FormCaptchaComponent } from './components/form-captcha.component';
import { FormUploadComponent } from './components/form-upload.component';
import { FormSubmitButtonComponent } from './components/form-submit-button.component';
import { TransPipe } from './pipes/trans-pipe';
import { AppApiService } from './services/app-api-service';
import { AppConfigService } from './services/app-config-service';
import { AppTranslationService } from './services/app-translation-service';
var BaseModule = (function () {
    function BaseModule() {
    }
    return BaseModule;
}());
BaseModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpModule,
            FormsModule,
            ReactiveFormsModule,
            InputTextModule,
            InputTextareaModule,
            DropdownModule,
            MultiSelectModule,
            ButtonModule
        ],
        declarations: [
            FormGridComponent,
            FormValidationMessagesComponent,
            FormTextComponent,
            FormTextAreaComponent,
            FormDropdownComponent,
            FormMultiSelectComponent,
            FormHiddenComponent,
            FormPasswordComponent,
            FormCaptchaComponent,
            FormUploadComponent,
            FormSubmitButtonComponent,
            TransPipe
        ],
        providers: [
            AppApiService,
            AppConfigService,
            AppTranslationService
        ],
        exports: [
            FormGridComponent,
            FormValidationMessagesComponent,
            FormTextComponent,
            FormTextAreaComponent,
            FormDropdownComponent,
            FormMultiSelectComponent,
            FormHiddenComponent,
            FormPasswordComponent,
            FormCaptchaComponent,
            FormUploadComponent,
            FormSubmitButtonComponent,
            TransPipe
        ]
    })
], BaseModule);
export { BaseModule };
//# sourceMappingURL=base.module.js.map