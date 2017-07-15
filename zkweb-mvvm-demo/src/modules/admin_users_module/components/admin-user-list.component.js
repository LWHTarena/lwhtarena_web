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
import { TenantManageService } from '../../generated_module/services/tenant-manage-service';
import { RoleManageService } from '../../generated_module/services/role-manage-service';
import { UserManageService } from '../../generated_module/services/user-manage-service';
import { UserTypes } from '../../generated_module/privileges/user-types';
import { Privileges } from '../../generated_module/privileges/privileges';
import { AppPrivilegeService } from '../../auth_module/services/app-privilege-service';
import { AppSessionService } from '../../auth_module/services/app-session-service';
var AdminUserListComponent = (function (_super) {
    __extends(AdminUserListComponent, _super);
    function AdminUserListComponent(confirmationService, appSessionService, appPrivilegeService, appTranslationService, tenantManageService, roleManageService, userManageService) {
        var _this = _super.call(this, confirmationService, appSessionService, appPrivilegeService, appTranslationService) || this;
        _this.tenantManageService = tenantManageService;
        _this.roleManageService = roleManageService;
        _this.userManageService = userManageService;
        _this.defaultAvatarUrl = require("../../../vendor/images/default-avatar.jpg");
        return _this;
    }
    AdminUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.roleOptions = [];
        this.userTypeOptions = [];
        this.roleManageService.GetAllRoles().subscribe(function (roles) {
            roles.forEach(function (role) {
                _this.roleOptions.push({ label: role.Name, value: role.Id });
            });
        });
        this.userTypeOptions.push({ label: this.appTranslationService.translate("Please Select"), value: null });
        this.userManageService.GetAllUserTypes().subscribe(function (userTypes) {
            userTypes.forEach(function (userType) {
                _this.userTypeOptions.push({ label: userType.Description, value: userType.Type });
            });
        });
        this.editForm.addControl("Id", new FormControl(""));
        this.editForm.addControl("Type", new FormControl("", Validators.required));
        this.editForm.addControl("Username", new FormControl("", Validators.required));
        this.editForm.addControl("Password", new FormControl("", Validators.minLength(6)));
        this.editForm.addControl("ConfirmPassword", new FormControl("", Validators.minLength(6)));
        this.editForm.addControl("RoleIds", new FormControl([]));
        this.editForm.addControl("Remark", new FormControl(""));
    };
    AdminUserListComponent.prototype.getRoleNames = function (row) {
        return row.Roles.map(function (r) { return r.Name; }).join(',');
    };
    AdminUserListComponent.prototype.submitSearch = function (request) {
        return this.userManageService.Search(request);
    };
    AdminUserListComponent.prototype.getAddRequirement = function () {
        return {
            requireUserType: UserTypes.IAmAdmin,
            requirePrivileges: [Privileges.User_Edit]
        };
    };
    AdminUserListComponent.prototype.getEditRequirement = function () {
        return {
            requireUserType: UserTypes.IAmAdmin,
            requirePrivileges: [Privileges.User_Edit]
        };
    };
    AdminUserListComponent.prototype.getRemoveRequirement = function () {
        return {
            requireUserType: UserTypes.IAmAdmin,
            requirePrivileges: [Privileges.User_Remove]
        };
    };
    AdminUserListComponent.prototype.submitEdit = function (obj) {
        return this.userManageService.Edit(obj);
    };
    AdminUserListComponent.prototype.submitRemove = function (obj) {
        return this.userManageService.Remove(obj.Id);
    };
    AdminUserListComponent.prototype.getAvatarUrl = function (row) {
        if (row.AvatarImageBase64) {
            return "data:image/jpeg;base64," + row.AvatarImageBase64;
        }
        else {
            return this.defaultAvatarUrl;
        }
    };
    return AdminUserListComponent;
}(CrudWithDialogBaseComponent));
AdminUserListComponent = __decorate([
    Component({
        selector: 'admin-user-list',
        templateUrl: '../views/admin-user-list.html',
        providers: [ConfirmationService]
    }),
    __metadata("design:paramtypes", [ConfirmationService,
        AppSessionService,
        AppPrivilegeService,
        AppTranslationService,
        TenantManageService,
        RoleManageService,
        UserManageService])
], AdminUserListComponent);
export { AdminUserListComponent };
//# sourceMappingURL=admin-user-list.component.js.map