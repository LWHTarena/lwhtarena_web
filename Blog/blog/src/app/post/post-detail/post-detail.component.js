"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var post_model_1 = require('../model/post-model');
var PostDetailComponent = (function () {
    function PostDetailComponent(postDetailService, activeRoute) {
        this.postDetailService = postDetailService;
        this.activeRoute = activeRoute;
        this.post = new post_model_1.Post();
        console.log(this.postDetailService);
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) { return _this.getPost(params["postId"]); });
    };
    PostDetailComponent.prototype.getPost = function (id) {
        var _this = this;
        this.postDetailService
            .getPost(id)
            .subscribe(function (data) { return _this.post = data; }, function (error) { return console.error(error); });
    };
    PostDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-post-detail',
            templateUrl: './post-detail.component.html',
            styleUrls: ['./post-detail.component.scss']
        })
    ], PostDetailComponent);
    return PostDetailComponent;
}());
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=post-detail.component.js.map