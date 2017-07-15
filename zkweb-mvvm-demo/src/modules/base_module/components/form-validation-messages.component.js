var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppTranslationService } from '../../base_module/services/app-translation-service';
var FormValidationMessagesComponent = (function () {
    function FormValidationMessagesComponent(appTranslationService) {
        this.appTranslationService = appTranslationService;
        this.errorMessages = [];
    }
    FormValidationMessagesComponent.prototype.formatErrorMessage = function (type, data) {
        // 获取自定义的错误信息
        var message = (this.validationMessages || {})[type];
        if (message) {
            return message;
        }
        // 构建默认的错误信息
        var fieldDisplayName = this.appTranslationService.translate(this.displayName || this.fieldName);
        if (type === "required") {
            message = this.appTranslationService.translate("{0} is required")
                .replace("{0}", fieldDisplayName);
        }
        else if (type === "minlength") {
            message = this.appTranslationService.translate("Length of {0} must not less than {1}")
                .replace("{0}", fieldDisplayName)
                .replace("{1}", data.requiredLength);
        }
        else if (type === "maxlength") {
            message = this.appTranslationService.translate("Length of {0} must not greater than {1}")
                .replace("{0}", fieldDisplayName)
                .replace("{1}", data.requiredLength);
        }
        else if (type === "email" || type === "pattern") {
            message = this.appTranslationService.translate("Format of {0} is incorrect")
                .replace("{0}", fieldDisplayName);
        }
        else {
            message = type;
        }
        return message;
    };
    FormValidationMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var formControl = this.formGroup.controls[this.fieldName];
        if (!formControl) {
            throw "formControl '" + this.fieldName + "' not exist";
        }
        // 监听控件状态改变
        formControl.statusChanges.subscribe(function (_) {
            if (formControl.valid || !formControl.dirty) {
                _this.errorMessages = [];
                return;
            }
            // 控件已修改且验证不通过时显示错误
            _this.errorMessages = [];
            var errors = formControl.errors;
            for (var key in errors) {
                if (errors.hasOwnProperty(key)) {
                    _this.errorMessages.push(_this.formatErrorMessage(key, errors[key]));
                }
            }
        });
    };
    return FormValidationMessagesComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", FormGroup)
], FormValidationMessagesComponent.prototype, "formGroup", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FormValidationMessagesComponent.prototype, "fieldName", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FormValidationMessagesComponent.prototype, "displayName", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FormValidationMessagesComponent.prototype, "validationMessages", void 0);
FormValidationMessagesComponent = __decorate([
    Component({
        selector: 'z-form-validation-messages',
        templateUrl: '../views/form-validation-messages.html',
    }),
    __metadata("design:paramtypes", [AppTranslationService])
], FormValidationMessagesComponent);
export { FormValidationMessagesComponent };
//# sourceMappingURL=form-validation-messages.component.js.map