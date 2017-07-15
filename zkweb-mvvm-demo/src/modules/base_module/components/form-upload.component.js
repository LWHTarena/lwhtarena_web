var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { FormFieldBaseComponent } from './form-field-base.component';
var FormUploadComponent = (function (_super) {
    __extends(FormUploadComponent, _super);
    function FormUploadComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** 把File对象设置到FormControl中，如果用默认的formControlName只会设置文件名 */
    FormUploadComponent.prototype.onFileChange = function (event) {
        var files = event.target.files;
        if (files.length > 0) {
            var formControl = this.formGroup.controls[this.fieldName];
            if (formControl == null) {
                throw "formControl '" + this.fieldName + "' not exist";
            }
            formControl.setValue(files[0]);
        }
    };
    return FormUploadComponent;
}(FormFieldBaseComponent));
FormUploadComponent = __decorate([
    Component({
        selector: 'z-form-upload',
        templateUrl: '../views/form-upload.html',
        host: { 'class': 'ui-grid-row' }
    })
], FormUploadComponent);
export { FormUploadComponent };
//# sourceMappingURL=form-upload.component.js.map