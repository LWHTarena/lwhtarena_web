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
var UserProfileService = (function () {
    function UserProfileService(appApiService) {
        this.appApiService = appApiService;
    }
    /** 修改密码 */
    UserProfileService.prototype.ChangePassword = function (dto) {
        return this.appApiService.call("/api/UserProfileService/ChangePassword", {
            dto: dto
        });
    };
    /** 上传头像 */
    UserProfileService.prototype.UploadAvatar = function (dto) {
        return this.appApiService.call("/api/UserProfileService/UploadAvatar", {
            dto: dto
        });
    };
    return UserProfileService;
}());
UserProfileService = __decorate([
    Injectable()
    /** 用户资料服务 */
    ,
    __metadata("design:paramtypes", [AppApiService])
], UserProfileService);
export { UserProfileService };
//# sourceMappingURL=user-profile-service.js.map