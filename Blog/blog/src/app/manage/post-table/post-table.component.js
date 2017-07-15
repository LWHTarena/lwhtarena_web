"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var fly_in_1 = require('../../animations/fly-in');
var router_1 = require('@angular/router');
var PostTableComponent = (function () {
    function PostTableComponent(router, activeRoute, postTableService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.postTableService = postTableService;
        this.dataURL = "src/mock-data/postlist-mock.json";
        this.maxSize = 5;
        this.itemsPerPage = 5;
        this.totalItems = 15;
        this.currentPage = 1;
    }
    PostTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) { return _this.getPostsByPage(params["page"]); });
    };
    PostTableComponent.prototype.getPostsByPage = function (page) {
        var _this = this;
        console.log("页码>" + page);
        return this.postTableService.getPostTable(this.dataURL).subscribe(function (res) {
            console.log(res);
            _this.postList = res.items;
        }, function (error) {
            console.log(error);
        }, function () {
        });
    };
    PostTableComponent.prototype.pageChanged = function (event) {
        var urlTree = this.router.parseUrl(this.router.url);
        var g = urlTree.root.children[router_1.PRIMARY_OUTLET];
        var s = g.segments;
        this.router.navigateByUrl(s[0] + "/posttable/page/" + event.page);
    };
    PostTableComponent.prototype.goToWrite = function () {
        this.router.navigateByUrl("user/write");
    };
    PostTableComponent.prototype.editPost = function (event) {
        var target = event.currentTarget;
        var nameAttr = target.attributes.name;
        var value = nameAttr.nodeValue;
        console.log("postId>" + value);
    };
    PostTableComponent.prototype.top = function (event) {
        var target = event.currentTarget;
        var nameAttr = target.attributes.name;
        var value = nameAttr.nodeValue;
        console.log("postId>" + value);
    };
    PostTableComponent.prototype.unTop = function (event) {
        var target = event.currentTarget;
        var nameAttr = target.attributes.name;
        var value = nameAttr.nodeValue;
        console.log("postId>" + value);
    };
    PostTableComponent.prototype.delPost = function (event) {
        var target = event.currentTarget;
        var nameAttr = target.attributes.name;
        var value = nameAttr.nodeValue;
        console.log("postId>" + value);
    };
    __decorate([
        core_1.Input()
    ], PostTableComponent.prototype, "dataURL");
    PostTableComponent = __decorate([
        core_1.Component({
            selector: 'app-post-table',
            templateUrl: './post-table.component.html',
            styleUrls: ['./post-table.component.scss'],
            animations: [
                fly_in_1.flyIn
            ]
        })
    ], PostTableComponent);
    return PostTableComponent;
}());
exports.PostTableComponent = PostTableComponent;
//# sourceMappingURL=post-table.component.js.map