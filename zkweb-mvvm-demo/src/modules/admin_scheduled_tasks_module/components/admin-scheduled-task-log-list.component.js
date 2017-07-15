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
var AdminScheduledTaskLogListComponent = (function (_super) {
    __extends(AdminScheduledTaskLogListComponent, _super);
    function AdminScheduledTaskLogListComponent(appSessionService, appPrivilegeService, appTranslationService, websiteManageService) {
        var _this = _super.call(this, appSessionService, appPrivilegeService, appTranslationService) || this;
        _this.websiteManageService = websiteManageService;
        return _this;
    }
    AdminScheduledTaskLogListComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.isSuccessOptions = [
            { label: this.appTranslationService.translate("Please Select"), value: null },
            { label: this.appTranslationService.translate("Yes"), value: true },
            { label: this.appTranslationService.translate("No"), value: false },
        ];
    };
    AdminScheduledTaskLogListComponent.prototype.submitSearch = function (request) {
        return this.websiteManageService.SearchScheduledTaskLogs(request);
    };
    AdminScheduledTaskLogListComponent.prototype.getAddRequirement = function () { return { requireUserType: UserTypes.IAmAdmin }; };
    AdminScheduledTaskLogListComponent.prototype.getEditRequirement = function () { return { requireUserType: UserTypes.IAmAdmin }; };
    AdminScheduledTaskLogListComponent.prototype.getRemoveRequirement = function () { return { requireUserType: UserTypes.IAmAdmin }; };
    AdminScheduledTaskLogListComponent.prototype.add = function () { };
    AdminScheduledTaskLogListComponent.prototype.edit = function () { };
    AdminScheduledTaskLogListComponent.prototype.remove = function () { };
    return AdminScheduledTaskLogListComponent;
}(CrudBaseComponent));
AdminScheduledTaskLogListComponent = __decorate([
    Component({
        selector: 'admin-scheduled-task-log-list',
        templateUrl: '../views/admin-scheduled-task-log-list.html',
        providers: [ConfirmationService]
    }),
    __metadata("design:paramtypes", [AppSessionService,
        AppPrivilegeService,
        AppTranslationService,
        WebsiteManageService])
], AdminScheduledTaskLogListComponent);
export { AdminScheduledTaskLogListComponent };
//# sourceMappingURL=admin-scheduled-task-log-list.component.js.map