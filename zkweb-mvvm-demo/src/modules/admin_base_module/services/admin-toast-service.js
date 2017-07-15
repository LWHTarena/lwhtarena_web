var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
/** 在后台页面显示悬浮信息的服务 */
var AdminToastService = (function () {
    function AdminToastService() {
        /** 悬浮信息列表 */
        this.toastMessages = [];
    }
    /** 获取悬浮信息列表 */
    AdminToastService.prototype.getToastMessages = function () {
        return this.toastMessages;
    };
    /** 清理所有悬浮消息 */
    AdminToastService.prototype.clearToastMessages = function () {
        while (this.toastMessages.length > 0) {
            this.toastMessages.pop();
        }
    };
    /** 显示悬浮信息，显示前清理之前的消息 */
    AdminToastService.prototype.showToastMessage = function (severity, detail) {
        this.clearToastMessages();
        this.toastMessages.push({ severity: severity, detail: detail });
    };
    /** 添加悬浮消息，之前的悬浮消息会保留 */
    AdminToastService.prototype.appendToastMessage = function (severity, detail) {
        this.toastMessages.push({ severity: severity, detail: detail });
    };
    return AdminToastService;
}());
AdminToastService = __decorate([
    Injectable()
], AdminToastService);
export { AdminToastService };
//# sourceMappingURL=admin-toast-service.js.map