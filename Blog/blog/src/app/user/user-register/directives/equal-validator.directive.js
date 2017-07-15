"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var EqualValidator = (function () {
    function EqualValidator() {
    }
    EqualValidator.prototype.validate = function (control) {
        //当前控件的值
        var selfValue = control.value;
        // 需要比较的控件，根据属性名称获取
        var targetControl = control.root.get(this.validateEqual);
        // 值不相等
        if (targetControl && selfValue !== targetControl.value) {
            if (!this.reverse) {
                return {
                    validateEqual: false
                };
            }
            else {
                targetControl.setErrors({
                    validateEqual: false
                });
            }
        }
        else {
            targetControl.setErrors(null);
        }
        return null;
    };
    __decorate([
        core_1.Input()
    ], EqualValidator.prototype, "validateEqual");
    __decorate([
        core_1.Input()
    ], EqualValidator.prototype, "reverse");
    EqualValidator = __decorate([
        core_1.Directive({
            selector: '[validateEqual]',
            providers: [
                { provide: forms_1.NG_VALIDATORS, useExisting: EqualValidator, multi: true }
            ]
        })
    ], EqualValidator);
    return EqualValidator;
}());
exports.EqualValidator = EqualValidator;
//# sourceMappingURL=equal-validator.directive.js.map