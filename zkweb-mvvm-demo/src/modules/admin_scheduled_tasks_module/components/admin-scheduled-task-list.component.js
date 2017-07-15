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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/components/common/api';
import { CrudBaseComponent } from '../../base_module/components/crud-base.component';
import { AppTranslationService } from '../../base_module/services/app-translation-service';
import { WebsiteManageService } from '../../generated_module/services/website-manage-service';
import { UserTypes } from '../../generated_module/privileges/user-types';
import { AppPrivilegeService } from '../../auth_module/services/app-privilege-service';
import { AppSessionService } from '../../auth_module/services/app-session-service';
var AdminScheduledTaskListComponent = (function (_super) {
    __extends(AdminScheduledTaskListComponent, _super);
    function AdminScheduledTaskListComponent(appSessionService, appPrivilegeService, appTranslationService, websiteManageService) {
        var _this = _super.call(this, appSessionService, appPrivilegeService, appTranslationService) || this;
        _this.websiteManageService = websiteManageService;
        return _this;
    }
    AdminScheduledTaskListComponent.prototype.submitSearch = function (request) {
        return this.websiteManageService.SearchScheduledTasks(request);
    };
    AdminScheduledTaskListComponent.prototype.getAddRequirement = function () { return { requireUserType: UserTypes.IAmAdmin }; };
    AdminScheduledTaskListComponent.prototype.getEditRequirement = function () { return { requireUserType: UserTypes.IAmAdmin }; };
    AdminScheduledTaskListComponent.prototype.getRemoveRequirement = function () { return { requireUserType: UserTypes.IAmAdmin }; };
    AdminScheduledTaskListComponent.prototype.add = function () { };
    AdminScheduledTaskListComponent.prototype.edit = function () { };
    AdminScheduledTaskListComponent.prototype.remove = function () { };
    return AdminScheduledTaskListComponent;
}(CrudBaseComponent));
AdminScheduledTaskListComponent = __decorate([
    Component({
        selector: 'admin-scheduled-task-list',
        templateUrl: '../views/admin-scheduled-task-list.html',
        providers: [ConfirmationService]
    }),
    __metadata("design:paramtypes", [AppSessionService,
        AppPrivilegeService,
        AppTranslationService,
        WebsiteManageService])
], AdminScheduledTaskListComponent);
export { AdminScheduledTaskListComponent };
//# sourceMappingURL=admin-scheduled-task-list.component.js.map