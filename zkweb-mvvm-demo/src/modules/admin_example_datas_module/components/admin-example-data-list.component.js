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
import { ExampleDataManageService } from '../../generated_module/services/example-data-manage-service';
import { UserTypes } from '../../generated_module/privileges/user-types';
import { Privileges } from '../../generated_module/privileges/privileges';
import { AppPrivilegeService } from '../../auth_module/services/app-privilege-service';
import { AppSessionService } from '../../auth_module/services/app-session-service';
var AdminExampleDataListComponent = (function (_super) {
    __extends(AdminExampleDataListComponent, _super);
    function AdminExampleDataListComponent(confirmationService, appSessionService, appPrivilegeService, appTranslationService, exampleDataManageService) {
        var _this = _super.call(this, confirmationService, appSessionService, appPrivilegeService, appTranslationService) || this;
        _this.exampleDataManageService = exampleDataManageService;
        return _this;
    }
    AdminExampleDataListComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.editForm.addControl("Id", new FormControl(""));
        this.editForm.addControl("Name", new FormControl("", Validators.required));
        this.editForm.addControl("Description", new FormControl([]));
    };
    AdminExampleDataListComponent.prototype.submitSearch = function (request) {
        return this.exampleDataManageService.Search(request);
    };
    AdminExampleDataListComponent.prototype.getAddRequirement = function () {
        return {
            requireUserType: UserTypes.IAmAdmin,
            requirePrivileges: [Privileges.ExampleData_Edit]
        };
    };
    AdminExampleDataListComponent.prototype.getEditRequirement = function () {
        return {
            requireUserType: UserTypes.IAmAdmin,
            requirePrivileges: [Privileges.ExampleData_Edit]
        };
    };
    AdminExampleDataListComponent.prototype.getRemoveRequirement = function () {
        return {
            requireMasterExampleData: true,
            requireUserType: UserTypes.IAmAdmin,
            requirePrivileges: [Privileges.ExampleData_Remove]
        };
    };
    AdminExampleDataListComponent.prototype.submitEdit = function (obj) {
        return this.exampleDataManageService.Edit(obj);
    };
    AdminExampleDataListComponent.prototype.submitRemove = function (obj) {
        return this.exampleDataManageService.Remove(obj.Id);
    };
    return AdminExampleDataListComponent;
}(CrudWithDialogBaseComponent));
AdminExampleDataListComponent = __decorate([
    Component({
        selector: 'admin-example-data-list',
        templateUrl: '../views/admin-example-data-list.html',
        providers: [ConfirmationService]
    }),
    __metadata("design:paramtypes", [ConfirmationService,
        AppSessionService,
        AppPrivilegeService,
        AppTranslationService,
        ExampleDataManageService])
], AdminExampleDataListComponent);
export { AdminExampleDataListComponent };
//# sourceMappingURL=admin-example-data-list.component.js.map