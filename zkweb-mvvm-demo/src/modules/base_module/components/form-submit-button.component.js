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
var FormSubmitButtonComponent = (function () {
    function FormSubmitButtonComponent(appTranslationService) {
        this.appTranslationService = appTranslationService;
        this.leftGridWidth = 0;
        this.selfGridWidth = 12;
    }
    FormSubmitButtonComponent.prototype.ngOnInit = function () {
        this.translatedDisplayName = this.appTranslationService.translate(this.displayName || "Submit");
    };
    return FormSubmitButtonComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", FormGroup)
], FormSubmitButtonComponent.prototype, "formGroup", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FormSubmitButtonComponent.prototype, "displayName", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], FormSubmitButtonComponent.prototype, "leftGridWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], FormSubmitButtonComponent.prototype, "selfGridWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FormSubmitButtonComponent.prototype, "isSubmitting", void 0);
FormSubmitButtonComponent = __decorate([
    Component({
        selector: 'z-form-submit-button',
        templateUrl: '../views/form-submit-button.html',
        host: { 'class': 'ui-grid-row' }
    }),
    __metadata("design:paramtypes", [AppTranslationService])
], FormSubmitButtonComponent);
export { FormSubmitButtonComponent };
//# sourceMappingURL=form-submit-button.component.js.map