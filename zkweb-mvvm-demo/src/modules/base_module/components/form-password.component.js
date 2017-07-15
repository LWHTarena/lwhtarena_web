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
var FormPasswordComponent = (function (_super) {
    __extends(FormPasswordComponent, _super);
    function FormPasswordComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FormPasswordComponent;
}(FormFieldBaseComponent));
FormPasswordComponent = __decorate([
    Component({
        selector: 'z-form-password',
        templateUrl: '../views/form-password.html',
        host: { 'class': 'ui-grid-row' }
    })
], FormPasswordComponent);
export { FormPasswordComponent };
//# sourceMappingURL=form-password.component.js.map