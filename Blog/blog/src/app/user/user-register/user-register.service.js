"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var UserRegisterService = (function () {
    function UserRegisterService(http) {
        this.http = http;
        this.userRegisterURL = "src/mock-data/user-register-mock.json";
        this.testEmailURL = "";
        this.subject = new Subject_1.Subject();
    }
    Object.defineProperty(UserRegisterService.prototype, "currentUser", {
        get: function () {
            return this.subject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UserRegisterService.prototype.register = function (user) {
        var _this = this;
        console.log(user);
        //向后台post数据的写法如下
        // let data = new URLSearchParams();
        // data.append('email', user.email);
        // data.append('password', user.password);
        // return this.http.post(this.userRegisterURL,data);
        return this.http
            .get(this.userRegisterURL)
            .map(function (response) {
            var user = response.json();
            localStorage.setItem("currentUser", JSON.stringify(user));
            _this.subject.next(user);
        });
    };
    UserRegisterService.prototype.testEmail = function (email) {
        return this.http.get(this.testEmailURL)
            .map(function (response) { return response.json(); });
    };
    UserRegisterService = __decorate([
        core_1.Injectable()
    ], UserRegisterService);
    return UserRegisterService;
}());
exports.UserRegisterService = UserRegisterService;
//# sourceMappingURL=user-register.service.js.map