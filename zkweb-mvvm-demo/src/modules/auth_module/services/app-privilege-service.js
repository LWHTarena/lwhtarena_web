var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AppTranslationService } from '../../base_module/services/app-translation-service';
import { UserTypes } from '../../generated_module/privileges/user-types';
import { Privileges } from '../../generated_module/privileges/privileges';
/** 检查权限的结果 */
var PrivilegeCheckResult = (function () {
    function PrivilegeCheckResult() {
    }
    return PrivilegeCheckResult;
}());
export { PrivilegeCheckResult };
/** 权限信息 */
var PrivilegeInfo = (function () {
    function PrivilegeInfo() {
    }
    return PrivilegeInfo;
}());
export { PrivilegeInfo };
/** 检查权限使用的服务 */
var AppPrivilegeService = (function () {
    function AppPrivilegeService(appTranslationService) {
        this.appTranslationService = appTranslationService;
    }
    /** 翻译权限 */
    AppPrivilegeService.prototype.translatePrivilege = function (privilege) {
        var index = privilege.indexOf(':');
        var group = index > 0 ? privilege.substr(0, index) : "Other";
        var name = index > 0 ? privilege.substr(index + 1) : privilege;
        return this.appTranslationService.translate(group) + ":" + this.appTranslationService.translate(name);
    };
    /** 获取所有权限 */
    AppPrivilegeService.prototype.getAllPrivileges = function (includeTenantPrivileges) {
        if (includeTenantPrivileges === void 0) { includeTenantPrivileges = false; }
        var result = [];
        for (var key in Privileges) {
            if (Privileges.hasOwnProperty(key)) {
                var privilege = Privileges[key];
                if (!includeTenantPrivileges && privilege.indexOf("Tenant") >= 0) {
                    continue;
                }
                var description = this.translatePrivilege(privilege);
                result.push({ privilege: privilege, description: description });
            }
        }
        return result;
    };
    /** 检查用户是否有满足指定的权限要求 */
    AppPrivilegeService.prototype.isAuthorized = function (user, auth) {
        var _this = this;
        if (user == null) {
            // 未登录时检查失败
            return { success: false, errorMessage: null };
        }
        else if (auth.requireMasterTenant && !user.OwnerTenantIsMasterTenant) {
            // 要求主租户但是用户不属于主租户时
            var errorMessage = this.appTranslationService
                .translate("Action require user under master tenant");
            return { success: false, errorMessage: errorMessage };
        }
        else if (auth.requireUserType &&
            user.ImplementedTypes.indexOf(auth.requireUserType) < 0) {
            // 不包含指定用户类型时检查失败
            var errorMessage = this.appTranslationService
                .translate("Action require user to be '{0}'")
                .replace("{0}", this.appTranslationService.translate(auth.requireUserType));
            return { success: false, errorMessage: errorMessage };
        }
        else if (auth.requirePrivileges &&
            user.ImplementedTypes.indexOf(UserTypes.IAmSuperAdmin) < 0 &&
            auth.requirePrivileges.filter(function (p) { return user.Privileges.indexOf(p) < 0; }).length > 0) {
            // 不包含指定权限时检查失败
            // 如果用户类型是超级管理员则不检查具体权限
            var errorMessage = this.appTranslationService
                .translate("Action require user to be '{0}', and have privileges '{1}'")
                .replace("{0}", this.appTranslationService.translate(auth.requireUserType))
                .replace("{1}", auth.requirePrivileges.map(function (p) { return _this.translatePrivilege(p); }).join());
            return { success: false, errorMessage: errorMessage };
        }
        return { success: true, errorMessage: null };
    };
    return AppPrivilegeService;
}());
AppPrivilegeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AppTranslationService])
], AppPrivilegeService);
export { AppPrivilegeService };
//# sourceMappingURL=app-privilege-service.js.map