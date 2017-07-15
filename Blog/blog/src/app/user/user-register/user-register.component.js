"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var user_model_1 = require('../model/user-model');
var UserRegisterComponent = (function () {
    function UserRegisterComponent(fb, userRegisterService, router, route) {
        this.fb = fb;
        this.userRegisterService = userRegisterService;
        this.router = router;
        this.route = route;
        this.userInfo = new user_model_1.User();
        this.formErrors = {
            'userName': '',
            'nickName': '',
            'email': '',
            'password': '',
            'confirmPassword': '',
            'formError': '',
            'vcode': ''
        };
        this.validationMessages = {
            'userName': {
                'required': '用户名必须输入。',
                'minlength': '用户名4到32个字符。'
            },
            'nickName': {
                'required': '昵称必须输入。',
                'minlength': '昵称2到32个字符。'
            },
            'email': {
                'required': '邮箱必须输入。',
                'pattern': '请输入正确的邮箱地址。'
            },
            'password': {
                'required': '密码必须输入。',
                'minlength': '密码至少要8位。'
            },
            'confirmPassword': {
                'required': '重复密码必须输入。',
                'minlength': '密码至少要8位。',
                'validateEqual': "两次输入的密码不一致。"
            },
            'vcode': {
                'required': '验证码必须输入。',
                'minlength': '4位验证码',
                'maxlength': '4位验证码'
            }
        };
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UserRegisterComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            "userName": [
                this.userInfo.userName,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(32)
                ]
            ],
            "nickName": [
                this.userInfo.nickName,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(2),
                    forms_1.Validators.maxLength(32)
                ]
            ],
            "email": [
                this.userInfo.email,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
                ]
            ],
            "password": [
                this.userInfo.password,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(8),
                ]
            ],
            "confirmPassword": [
                this.userInfo.confirmPassword,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(8)
                ]
            ],
            "vcode": [
                this.userInfo.vcode,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(4)
                ]
            ]
        });
        this.userForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    UserRegisterComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    UserRegisterComponent.prototype.doRegister = function () {
        var _this = this;
        if (this.userForm.valid) {
            this.userInfo = this.userForm.value;
            this.userRegisterService.register(this.userInfo)
                .subscribe(function (data) {
                _this.router.navigateByUrl("home");
            }, function (error) {
                _this.formErrors.formError = error.message;
                console.error(error);
            });
        }
        else {
            this.formErrors.formError = "存在不合法的输入项，请检查。";
        }
        console.log(this.userInfo);
    };
    UserRegisterComponent.prototype.testEmail = function () {
        var email = this.userForm.get("email").value;
        this.userRegisterService.testEmail(email)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    };
    UserRegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-user-register',
            templateUrl: './user-register.component.html',
            styleUrls: ['./user-register.component.scss']
        })
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());
exports.UserRegisterComponent = UserRegisterComponent;
//# sourceMappingURL=user-register.component.js.map