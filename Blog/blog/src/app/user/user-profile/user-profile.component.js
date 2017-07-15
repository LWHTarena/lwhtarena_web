"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var form_field_1 = require('./dynamic-form/form-field');
var UserProfileComponent = (function () {
    function UserProfileComponent(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.fields = [
            new form_field_1.Image({
                src: "assets/imgs/angular2-small.png"
            }),
            new form_field_1.Textbox({
                label: "头像:",
                placeholder: "上传头像",
                type: "file"
            }),
            new form_field_1.Textbox({
                label: "用户名:",
                placeholder: "用户名"
            }),
            new form_field_1.Textbox({
                label: "常用邮箱:",
                placeholder: "常用邮箱"
            }),
            new form_field_1.Textbox({
                label: "密码:",
                type: "password",
                placeholder: "密码，至少8位"
            }),
            new form_field_1.Textbox({
                label: "重复密码:",
                type: "password",
                placeholder: "重复密码"
            }),
            new form_field_1.TextArea({
                label: "个人简介:",
                placeholder: "个人简介，最多140字，不能放链接。",
                rows: 3
            })
        ];
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.form = this.toFormGroup(this.fields);
        this.activeRoute.params.subscribe(function (params) { console.log(params); });
    };
    UserProfileComponent.prototype.toFormGroup = function (fields) {
        var group = {};
        fields.forEach(function (field) {
            group[field.key] = new forms_1.FormControl(field.value || '');
        });
        return new forms_1.FormGroup(group);
    };
    __decorate([
        core_1.Input()
    ], UserProfileComponent.prototype, "fields");
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.scss']
        })
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map