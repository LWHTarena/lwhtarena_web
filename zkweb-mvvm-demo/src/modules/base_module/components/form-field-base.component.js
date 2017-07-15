var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var FormFieldBaseComponent = (function () {
    function FormFieldBaseComponent(appTranslationService) {
        this.appTranslationService = appTranslationService;
        /** 文本的网格宽度 */
        this.labelGridWidth = 4;
        /** 控件的网格宽度 */
        this.fieldGridWidth = 8;
    }
    FormFieldBaseComponent.prototype.ngOnInit = function () {
        this.translatedDisplayName = this.appTranslationService.translate(this.displayName || this.fieldName);
        this.translatedPlaceHolder = this.appTranslationService.translate(this.placeHolder) || this.translatedDisplayName;
    };
    return FormFieldBaseComponent;
}());
export { FormFieldBaseComponent };
__decorate([
    Input(),
    __metadata("design:type", FormGroup)
], FormFieldBaseComponent.prototype, "formGroup", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FormFieldBaseComponent.prototype, "fieldName", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FormFieldBaseComponent.prototype, "displayName", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FormFieldBaseComponent.prototype, "placeHolder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FormFieldBaseComponent.prototype, "validationMessages", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], FormFieldBaseComponent.prototype, "labelGridWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], FormFieldBaseComponent.prototype, "fieldGridWidth", void 0);
//# sourceMappingURL=form-field-base.component.js.map