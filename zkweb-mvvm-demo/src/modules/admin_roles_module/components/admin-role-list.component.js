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
import { FormControl, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/components/common/api';
import { CrudWithDialogBaseComponent } from '../../base_module/components/crud-with-dialog-base.component';
import { AppTranslationService } from '../../base_module/services/app-translation-service';
import { RoleManageService } from '../../generated_module/services/role-manage-service';
import { UserTypes } from '../../generated_module/privileges/user-types';
import { Privileges } from '../../generated_module/privileges/privileges';
import { AppPrivilegeService } from '../../auth_module/services/app-privilege-service';
import { AppSessionService } from '../../auth_module/services/app-session-service';
var AdminRoleListComponent = (function (_super) {
    __extends(AdminRoleListComponent, _super);
    function AdminRoleListComponent(confirmationService, appSessionService, appPrivilegeService, appTranslationService, roleManageService) {
        var _this = _super.call(this, confirmationService, appSessionService, appPrivilegeService, appTranslationService) || this;
        _this.roleManageService = roleManageService;
        return _this;
    }
    AdminRoleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.privilegeOptions = [];
        this.appPrivilegeService.getAllPrivileges(this.isMasterTenant).forEach(function (info) {
            _this.privilegeOptions.push({ label: info.description, value: info.privilege });
        });
        this.editForm.addControl("Id", new FormControl(""));
        this.editForm.addControl("Name", new FormControl("", Validators.required));
        this.editForm.addControl("Privileges", new FormControl([]));
        this.editForm.addControl("Remark", new FormControl(""));
    };
    AdminRoleListComponent.prototype.submitSearch = function (request) {
        return this.roleManageService.Search(request);
    };
    AdminRoleListComponent.prototype.getAddRequirement = function () {
        return {
            requireMasterRole: true,
            requireUserType: UserTypes.IAmAdmin,
            requirePrivileges: [Privileges.Role_Edit]
        };
    };
    AdminRoleListComponent.prototype.getEditRequirement = function () {
        return {
            requireUserType: UserTypes.IAmAdmin,
            requirePrivileges: [Privileges.Role_Edit]
        };
    };
    AdminRoleListComponent.prototype.getRemoveRequirement = function () {
        return {
            requireUserType: UserTypes.IAmAdmin,
            requirePrivileges: [Privileges.Role_Remove]
        };
    };
    AdminRoleListComponent.prototype.submitEdit = function (obj) {
        return this.roleManageService.Edit(obj);
    };
    AdminRoleListComponent.prototype.submitRemove = function (obj) {
        return this.roleManageService.Remove(obj.Id);
    };
    return AdminRoleListComponent;
}(CrudWithDialogBaseComponent));
AdminRoleListComponent = __decorate([
    Component({
        selector: 'admin-role-list',
        templateUrl: '../views/admin-role-list.html',
        providers: [ConfirmationService]
    }),
    __metadata("design:paramtypes", [ConfirmationService,
        AppSessionService,
        AppPrivilegeService,
        AppTranslationService,
        RoleManageService])
], AdminRoleListComponent);
export { AdminRoleListComponent };
//# sourceMappingURL=admin-role-list.component.js.map