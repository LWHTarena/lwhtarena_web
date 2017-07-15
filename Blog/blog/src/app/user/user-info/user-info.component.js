"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UserInfoComponent = (function () {
    function UserInfoComponent() {
        this.follow = new core_1.EventEmitter();
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        //构造组件的时候，@Input的属性还没有值
        console.log(this.panelTitle);
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        //组件初始化完成之后，panelTitle才会有值
        console.log(this.panelTitle);
    };
    UserInfoComponent.prototype.followBtnClick = function () {
        this.follow.emit("follow");
    };
    __decorate([
        core_1.Input()
    ], UserInfoComponent.prototype, "panelTitle");
    __decorate([
        core_1.Output()
    ], UserInfoComponent.prototype, "follow");
    UserInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-user-info',
            templateUrl: './user-info.component.html',
            styleUrls: ['./user-info.component.scss']
        })
    ], UserInfoComponent);
    return UserInfoComponent;
}());
exports.UserInfoComponent = UserInfoComponent;
//# sourceMappingURL=user-info.component.js.map