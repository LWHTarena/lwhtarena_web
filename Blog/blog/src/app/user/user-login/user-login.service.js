"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var rxjs_1 = require("rxjs");
var UserLoginService = (function () {
    function UserLoginService(http) {
        this.http = http;
        this.userLoginURL = 'src/mock-data/user-login-mock.json';
        this.subject = new rxjs_1.Subject();
    }
    Object.defineProperty(UserLoginService.prototype, "currentUser", {
        get: function () {
            return this.subject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UserLoginService.prototype.login = function (user) {
        var _this = this;
        return this.http
            .get(this.userLoginURL)
            .map(function (response) {
            var user = response.json();
            console.log("user object>" + user);
            if (user && user.token) {
                localStorage.setItem("currentUser", JSON.stringify(user));
                _this.subject.next(Object.assign({}, user));
            }
            return response;
        })
            .subscribe(function (data) {
            console.log("login success>" + data);
        }, function (error) {
            console.error(error);
        });
    };
    UserLoginService.prototype.logout = function () {
        localStorage.removeItem("currentUser");
        this.subject.next(Object.assign({}));
    };
    UserLoginService = __decorate([
        core_1.Injectable()
    ], UserLoginService);
    return UserLoginService;
}());
exports.UserLoginService = UserLoginService;
//# sourceMappingURL=user-login.service.js.map