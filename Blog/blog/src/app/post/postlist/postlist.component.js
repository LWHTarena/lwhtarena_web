"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var PostlistComponent = (function () {
    function PostlistComponent(router, activeRoute, postService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.postService = postService;
        this.maxSize = 5;
        this.itemsPerPage = 5;
        //不要手动对这个属性进行赋值，它是和分页工具条自动绑定的
        this.currentPage = 1;
        this.searchTextStream = new Subject_1.Subject();
    }
    PostlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            // 这里可以从路由里面获取URL参数
            console.log(params);
            _this.loadData(_this.searchText, _this.currentPage);
        });
        this.searchTextStream
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            console.log(_this.searchText);
            _this.loadData(_this.searchText, _this.currentPage);
        });
    };
    PostlistComponent.prototype.loadData = function (searchText, page) {
        var _this = this;
        var offset = (this.currentPage - 1) * this.itemsPerPage;
        var end = (this.currentPage) * this.itemsPerPage;
        return this.postService.getPostList(searchText, page).subscribe(function (res) {
            _this.totalItems = res["total"];
            //TODO.正式环境中，需要去掉slice
            _this.postList = res["items"].slice(offset, end > _this.totalItems ? _this.totalItems : end);
        }, function (error) { console.log(error); }, function () { });
    };
    PostlistComponent.prototype.pageChanged = function (event) {
        this.router.navigateByUrl("posts/page/" + event.page);
    };
    PostlistComponent.prototype.searchChanged = function ($event) {
        this.searchTextStream.next(this.searchText);
    };
    PostlistComponent.prototype.gotoWrite = function () {
        //TODO：如果没有登录，跳转到登录页，如果已登录，跳往写作页
        this.router.navigateByUrl("user/write");
    };
    PostlistComponent = __decorate([
        core_1.Component({
            selector: 'app-postlist',
            templateUrl: './postlist.component.html',
            styleUrls: ['./postlist.component.scss']
        })
    ], PostlistComponent);
    return PostlistComponent;
}());
exports.PostlistComponent = PostlistComponent;
//# sourceMappingURL=postlist.component.js.map