/**
 * Created by Administrator on 2017/3/21.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var fly_in_1 = require("../../animations/fly-in");
var UserMainComponent = (function () {
    function UserMainComponent() {
    }
    UserMainComponent.prototype.ngOnInit = function () {
    };
    UserMainComponent.prototype.onActivate = function (component) {
        console.log("组件加载完成>" + component);
    };
    UserMainComponent.prototype.onDeactivate = function (component) {
        console.log("组件已经移除>" + component);
    };
    UserMainComponent.prototype.doFollow = function () {
        alert("自己不能关注自己！");
    };
    UserMainComponent = __decorate([
        core_1.Component({
            selector: 'app-user-main',
            templateUrl: './user-main.component.html',
            styleUrls: ['./user-main.component.scss'],
            animations: [
                fly_in_1.flyIn
            ]
        })
    ], UserMainComponent);
    return UserMainComponent;
}());
exports.UserMainComponent = UserMainComponent;
//# sourceMappingURL=user-main.component.js.map