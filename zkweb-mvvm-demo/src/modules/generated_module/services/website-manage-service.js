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
import { AppApiService } from '../../base_module/services/app-api-service';
var WebsiteManageService = (function () {
    function WebsiteManageService(appApiService) {
        this.appApiService = appApiService;
    }
    /** 清理缓存 */
    WebsiteManageService.prototype.ClearCache = function () {
        return this.appApiService.call("/api/WebsiteManageService/ClearCache", {});
    };
    /** 获取网站信息 */
    WebsiteManageService.prototype.GetWebsiteInfo = function () {
        return this.appApiService.call("/api/WebsiteManageService/GetWebsiteInfo", {});
    };
    /** 获取网站信息 */
    WebsiteManageService.prototype.GetWebsiteSettings = function () {
        return this.appApiService.call("/api/WebsiteManageService/GetWebsiteSettings", {});
    };
    /** 保存网站信息 */
    WebsiteManageService.prototype.SaveWebsiteSettings = function (dto) {
        return this.appApiService.call("/api/WebsiteManageService/SaveWebsiteSettings", {
            dto: dto
        });
    };
    /** 搜索定时任务 */
    WebsiteManageService.prototype.SearchScheduledTasks = function (request) {
        return this.appApiService.call("/api/WebsiteManageService/SearchScheduledTasks", {
            request: request
        });
    };
    /** 搜索定时任务记录 */
    WebsiteManageService.prototype.SearchScheduledTaskLogs = function (request) {
        return this.appApiService.call("/api/WebsiteManageService/SearchScheduledTaskLogs", {
            request: request
        });
    };
    return WebsiteManageService;
}());
WebsiteManageService = __decorate([
    Injectable()
    /** 网站管理服务 */
    ,
    __metadata("design:paramtypes", [AppApiService])
], WebsiteManageService);
export { WebsiteManageService };
//# sourceMappingURL=website-manage-service.js.map