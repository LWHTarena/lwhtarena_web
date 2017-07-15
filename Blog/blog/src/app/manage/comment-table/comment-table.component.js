"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var fly_in_1 = require('../../animations/fly-in');
var CommentTableComponent = (function () {
    function CommentTableComponent(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.maxSize = 5;
        this.itemsPerPage = 5;
        this.totalItems = 15;
        this.currentPage = 1;
    }
    CommentTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) { return _this.getCommentsByPage(params["page"]); });
        //启动web worker 加载数据
        this.worker = new Worker('src/app/manage/comment-table/comment-worker.js');
        this.worker.postMessage({ action: "load" });
        //注册事件
        this.worker.addEventListener('message', function (event) {
            console.log(event);
        });
        this.worker.addEventListener('error', function (event) {
            console.error(event);
        });
    };
    CommentTableComponent.prototype.getCommentsByPage = function (page) {
        console.log("页码>" + page);
    };
    CommentTableComponent.prototype.pageChanged = function (event) {
        var urlTree = this.router.parseUrl(this.router.url);
        var g = urlTree.root.children[router_1.PRIMARY_OUTLET];
        var s = g.segments;
        this.router.navigateByUrl(s[0] + "/commenttable/page/" + event.page);
    };
    CommentTableComponent.prototype.delComment = function (commentId) {
        console.log(commentId);
    };
    CommentTableComponent = __decorate([
        core_1.Component({
            selector: 'app-comment-table',
            templateUrl: './comment-table.component.html',
            styleUrls: ['./comment-table.component.scss'],
            animations: [
                fly_in_1.flyIn
            ]
        })
    ], CommentTableComponent);
    return CommentTableComponent;
}());
exports.CommentTableComponent = CommentTableComponent;
//# sourceMappingURL=comment-table.component.js.map