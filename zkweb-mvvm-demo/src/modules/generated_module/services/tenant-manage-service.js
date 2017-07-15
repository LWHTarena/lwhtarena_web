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
var TenantManageService = (function () {
    function TenantManageService(appApiService) {
        this.appApiService = appApiService;
    }
    /** 搜索租户 */
    TenantManageService.prototype.Search = function (request) {
        return this.appApiService.call("/api/TenantManageService/Search", {
            request: request
        });
    };
    /** 编辑租户 */
    TenantManageService.prototype.Edit = function (dto) {
        return this.appApiService.call("/api/TenantManageService/Edit", {
            dto: dto
        });
    };
    /** 删除租户 */
    TenantManageService.prototype.Remove = function (id) {
        return this.appApiService.call("/api/TenantManageService/Remove", {
            id: id
        });
    };
    return TenantManageService;
}());
TenantManageService = __decorate([
    Injectable()
    /** 租户管理服务 */
    ,
    __metadata("design:paramtypes", [AppApiService])
], TenantManageService);
export { TenantManageService };
//# sourceMappingURL=tenant-manage-service.js.map