/**
 * Created by Administrator on 2017/3/19.
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
var UserTableComponent = (function () {
    function UserTableComponent(router, activeRouter) {
        this.router = router;
        this.activeRouter = activeRouter;
        this.maxSize = 5;
        this.itemsPerPage = 5;
        this.totalItems = 15;
        this.currentPage = 1;
    }
    UserTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) { return _this.getUsersByPage(params["page"]); });
    };
    UserTableComponent.prototype.getUsersByPage = function (page) {
        console.log("页码>" + page);
    };
    UserTableComponent.prototype.pageChanged = function (event) {
        this.router.navigateByUrl("manage/usertable/page" + event.page);
    };
    UserTableComponent.prototype.newUser = function () {
        this.router.navigateByUrl("manage/usertable/newuser");
    };
    UserTableComponent.prototype.blockUser = function (userId) {
        console.log(userId);
    };
    UserTableComponent.prototype.unBlockUser = function (userId) {
        console.log(userId);
    };
    UserTableComponent.prototype.resetPwd = function (userId) {
        console.log(userId);
    };
    UserTableComponent = __decorate([
        core_1.Component({
            moduleId: 'app-user-table',
            templateUrl: './user-table.component.html',
            styleUrls: ['./user-table.component.scss'],
            animations: [
                fly_in_1.flyIn
            ]
        })
    ], UserTableComponent);
    return UserTableComponent;
}());
exports.UserTableComponent = UserTableComponent;
//# sourceMappingURL=user-table.component.js.map