/**
 * Created by Administrator on 2017/3/12.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AddCommentComponent = (function () {
    function AddCommentComponent(commentService) {
        this.commentService = commentService;
    }
    AddCommentComponent.prototype.ngOnInit = function () {
    };
    AddCommentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-add-comment',
            templateUrl: './add-comment.component.html',
            styleUrls: ['./add-comment.component.scss']
        })
    ], AddCommentComponent);
    return AddCommentComponent;
}());
exports.AddCommentComponent = AddCommentComponent;
//# sourceMappingURL=add-comment.component.js.map