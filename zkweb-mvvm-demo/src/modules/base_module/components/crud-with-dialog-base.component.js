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
import { FormGroup } from '@angular/forms';
import { CrudBaseComponent } from './crud-base.component';
/** 使用弹出框的增删查改页的组件基类 */
var CrudWithDialogBaseComponent = (function (_super) {
    __extends(CrudWithDialogBaseComponent, _super);
    function CrudWithDialogBaseComponent(confirmationService, appSessionService, appPrivilegeService, appTranslationService) {
        var _this = _super.call(this, appSessionService, appPrivilegeService, appTranslationService) || this;
        _this.confirmationService = confirmationService;
        /** 编辑弹出框是否可见 */
        _this.editDialogVisible = false;
        /** 确认是否删除使用的消息模板 */
        _this.removeConfirmTemplate = "Are you sure to remove '{0}'?";
        /** 编辑表单 */
        _this.editForm = new FormGroup({});
        /** 编辑表单是否正在提交 */
        _this.editFormSubmitting = false;
        /** 编辑表单使用的消息列表 */
        _this.editMsgs = [];
        return _this;
    }
    /** 在编辑表单显示消息 */
    CrudWithDialogBaseComponent.prototype.displayEditMessage = function (severity, detail) {
        this.editMsgs = [{ severity: severity, detail: this.appTranslationService.translate(detail) }];
    };
    /** 添加数据 */
    CrudWithDialogBaseComponent.prototype.add = function () {
        this.editMsgs = [];
        this.editForm.reset();
        this.editDialogVisible = true;
    };
    /** 编辑数据 */
    CrudWithDialogBaseComponent.prototype.edit = function (obj) {
        this.editMsgs = [];
        this.editForm.reset();
        this.editForm.patchValue(obj);
        this.editDialogVisible = true;
    };
    /* 关闭编辑框 */
    CrudWithDialogBaseComponent.prototype.editDialogClose = function () {
        this.editMsgs = [];
        this.editForm.reset();
        this.editDialogVisible = false;
    };
    /* 提交编辑表单 */
    CrudWithDialogBaseComponent.prototype.editDialogSubmit = function () {
        var _this = this;
        this.editFormSubmitting = true;
        console.log("submit form", JSON.parse(JSON.stringify(this.editForm.value)));
        this.submitEdit(this.editForm.value).subscribe(function (s) {
            _this.displayMessage("info", s.Message);
            _this.searchWithLastParameters();
            _this.editFormSubmitting = false;
            _this.editDialogClose();
        }, function (e) {
            _this.displayEditMessage("error", e);
            _this.editFormSubmitting = false;
        });
    };
    /** 删除数据 */
    CrudWithDialogBaseComponent.prototype.remove = function (obj) {
        var _this = this;
        // 弹出确认框
        var name = obj.Name || obj.DisplayName || obj.Username || obj.Title || obj.Serial;
        var confirmMessage = this.appTranslationService.translate(this.removeConfirmTemplate)
            .replace("{0}", name);
        this.confirmationService.confirm({
            message: confirmMessage,
            accept: function () {
                _this.submitRemove(obj).subscribe(function (s) {
                    _this.displayMessage("info", s.Message);
                    _this.searchWithLastParameters();
                }, function (e) { return _this.displayMessage("error", e); });
            }
        });
    };
    return CrudWithDialogBaseComponent;
}(CrudBaseComponent));
export { CrudWithDialogBaseComponent };
//# sourceMappingURL=crud-with-dialog-base.component.js.map