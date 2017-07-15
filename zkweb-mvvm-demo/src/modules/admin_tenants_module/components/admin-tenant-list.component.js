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
import { UserTypes } from '../../generated_module/privileges/user-types';
import { Privileges } from '../../generated_module/privileges/privileges';
import { AppPrivilegeService } from '../../auth_module/services/app-privilege-service';
import { AppSessionService } from '../../auth_module/services/app-session-service';
var AdminTenantListComponent = (function (_super) {
    __extends(AdminTenantListComponent, _super);
    function AdminTenantListComponent(confirmationService, appSessionService, appPrivilegeService, appTranslationService, tenantManageService) {
        var _this = _super.call(this, confirmationService, appSessionService, appPrivilegeService, appTranslationService) || this;
        _this.tenantManageService = tenantManageService;
        return _this;
    }
    AdminTenantListComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.isMasterOptions = [
            { label: this.appTranslationService.translate("Please Select"), value: null },
            { label: this.appTranslationService.translate("Yes"), value: true },
            { label: this.appTranslationService.translate("No"), value: false },
        ];
        this.editForm.addControl("Id", new FormControl(""));
        this.editForm.addControl("Name", new FormControl("", Validators.required));
        this.editForm.addControl("SuperAdminName", new FormControl("", Validators.required));
        this.editForm.addControl("SuperAdminPassword", new FormControl("", Validators.minLength(6)));
        this.editForm.addControl("SuperAdminConfirmPassword", new FormControl("", Validators.minLength(6)));
        this.editForm.addControl("Remark", new FormControl(""));
    };
    AdminTenantListComponent.prototype.submitSearch = function (request) {
        return this.tenantManageService.Search(request);
    };
    AdminTenantListComponent.prototype.getAddRequirement = function () {
        return {
            requireMasterTenant: true,
            requireUserType: UserTypes.IAmAdmin,
            requirePrivileges: [Privileges.Tenant_Edit]
        };
    };
    AdminTenantListComponent.prototype.getEditRequirement = function () {
        return {
            requireMasterTenant: true,
            requireUserType: UserTypes.IAmAdmin,
            requirePrivileges: [Privileges.Tenant_Edit]
        };
    };
    AdminTenantListComponent.prototype.getRemoveRequirement = function () {
        return {
            requireMasterTenant: true,
            requireUserType: UserTypes.IAmAdmin,
            requirePrivileges: [Privileges.Tenant_Remove]
        };
    };
    AdminTenantListComponent.prototype.submitEdit = function (obj) {
        return this.tenantManageService.Edit(obj);
    };
    AdminTenantListComponent.prototype.submitRemove = function (obj) {
        return this.tenantManageService.Remove(obj.Id);
    };
    return AdminTenantListComponent;
}(CrudWithDialogBaseComponent));
AdminTenantListComponent = __decorate([
    Component({
        selector: 'admin-tenant-list',
        templateUrl: '../views/admin-tenant-list.html',
        providers: [ConfirmationService]
    }),
    __metadata("design:paramtypes", [ConfirmationService,
        AppSessionService,
        AppPrivilegeService,
        AppTranslationService,
        TenantManageService])
], AdminTenantListComponent);
export { AdminTenantListComponent };
//# sourceMappingURL=admin-tenant-list.component.js.map