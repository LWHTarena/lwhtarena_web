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
import { AdminNavMenu } from '../navigation/admin-nav-menu';
import { AppConfigService } from '../../base_module/services/app-config-service';
import { AppTranslationService } from '../../base_module/services/app-translation-service';
import { AppSessionService } from '../../auth_module/services/app-session-service';
import { AppPrivilegeService } from '../../auth_module/services/app-privilege-service';
import { WebsiteManageService } from '../../generated_module/services/website-manage-service';
import { AdminToastService } from '../services/admin-toast-service';
var AdminContainerComponent = (function () {
    function AdminContainerComponent(appConfigService, appTranslationService, appSessionService, appPrivilegeService, websiteManageService, adminToastService) {
        this.appConfigService = appConfigService;
        this.appTranslationService = appTranslationService;
        this.appSessionService = appSessionService;
        this.appPrivilegeService = appPrivilegeService;
        this.websiteManageService = websiteManageService;
        this.adminToastService = adminToastService;
        this.logoUrl = require("../../../vendor/images/logo.png");
        this.dropdownVisible = false;
        this.mobileMenuActive = false;
        this.navMenuGroups = [];
        this.defaultAvatarUrl = require("../../../vendor/images/default-avatar.jpg");
        this.avatarUrl = this.defaultAvatarUrl;
        this.switchLanguageItems = [];
        this.switchTimezoneItems = [];
    }
    AdminContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 更新当前登录用户的信息
        this.navMenuGroups = [];
        this.avatarUrl = this.defaultAvatarUrl;
        this.username = null;
        this.appSessionService.getSessionInfo().subscribe(function (sessionInfo) {
            var user = sessionInfo.User;
            // 根据当前用户显示导航栏菜单，过滤无权限的菜单项
            var newMenuGroups = [];
            AdminNavMenu.forEach(function (group) {
                // 检查分组权限
                if (group.auth != null &&
                    !_this.appPrivilegeService.isAuthorized(user, group.auth).success) {
                    return;
                }
                // 构建新的菜单项列表
                var newGroup = {
                    name: group.name,
                    icon: group.icon,
                    items: [],
                    url: group.url,
                    auth: group.auth
                };
                (group.items || []).forEach(function (item) {
                    // 检查菜单项权限
                    console.log("check", item.auth);
                    if (item.auth != null &&
                        !_this.appPrivilegeService.isAuthorized(user, item.auth).success) {
                        return;
                    }
                    newGroup.items.push(item);
                });
                // 如果分组有自己的url，或者分组有一个以上的菜单项则添加到新的列表中
                if (newGroup.url || newGroup.items.length > 0) {
                    newMenuGroups.push(newGroup);
                }
            });
            _this.navMenuGroups = newMenuGroups;
            // 更新当前用户的头像地址
            if (user.AvatarImageBase64) {
                _this.avatarUrl = "data:image/jpeg;base64," + user.AvatarImageBase64;
            }
            else {
                _this.avatarUrl = _this.defaultAvatarUrl;
            }
            // 更新当前用户的用户名
            _this.username = user.Username;
        });
        // 更新切换语言的菜单
        this.switchLanguageItems = [
            {
                label: this.appTranslationService.translate("zh-CN"),
                icon: "fa-language",
                command: function () { return _this.switchLanguage("zh-CN"); }
            },
            {
                label: this.appTranslationService.translate("en-US"),
                icon: "fa-language",
                command: function () { return _this.switchLanguage("en-US"); }
            }
        ];
        // 更新切换时区的菜单
        this.switchTimezoneItems = [
            {
                label: this.appTranslationService.translate("Asia/Shanghai"),
                icon: "fa-clock-o",
                command: function () { return _this.switchTimezone("Asia/Shanghai"); }
            },
            {
                label: this.appTranslationService.translate("America/New_York"),
                icon: "fa-clock-o",
                command: function () { return _this.switchTimezone("America/New_York"); }
            }
        ];
    };
    /** 切换手机版菜单的显示 */
    AdminContainerComponent.prototype.toggleMenu = function (e) {
        this.mobileMenuActive = !this.mobileMenuActive;
        e.preventDefault();
    };
    /** 获取悬浮信息列表 */
    AdminContainerComponent.prototype.getToastMessages = function () {
        return this.adminToastService.getToastMessages();
    };
    /** 清理缓存 */
    AdminContainerComponent.prototype.clearCache = function (e) {
        var _this = this;
        this.websiteManageService.ClearCache().subscribe(function (s) {
            _this.adminToastService.showToastMessage("info", s.Message);
            _this.dropdownVisible = false;
        }, function (ee) { return _this.adminToastService.showToastMessage("error", e); });
        e.preventDefault();
    };
    /** 退出登录 */
    AdminContainerComponent.prototype.logout = function (e) {
        this.appConfigService.setSessionId("");
        location.href = location.href;
        e.preventDefault();
    };
    /** 切换语言 */
    AdminContainerComponent.prototype.switchLanguage = function (language) {
        this.appConfigService.setLanguage(language);
        location.href = location.href;
    };
    /** 切换时区 */
    AdminContainerComponent.prototype.switchTimezone = function (timezone) {
        this.appConfigService.setTimezone(timezone);
        location.href = location.href;
    };
    return AdminContainerComponent;
}());
AdminContainerComponent = __decorate([
    Component({
        selector: 'admin-container',
        templateUrl: '../views/admin-container.html',
        styleUrls: ['../styles/admin-container.scss']
    }),
    __metadata("design:paramtypes", [AppConfigService,
        AppTranslationService,
        AppSessionService,
        AppPrivilegeService,
        WebsiteManageService,
        AdminToastService])
], AdminContainerComponent);
export { AdminContainerComponent };
//# sourceMappingURL=admin-container.component.js.map