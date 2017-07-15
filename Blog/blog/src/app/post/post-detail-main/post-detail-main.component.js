"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var fly_in_1 = require('../../animations/fly-in');
var PostDetailMainComponent = (function () {
    function PostDetailMainComponent(router, activatedRoute, userLoginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userLoginService = userLoginService;
    }
    PostDetailMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userLoginService.currentUser
            .subscribe(function (data) {
            var activatedRouteSnapshot = _this.activatedRoute.snapshot;
            var routerState = _this.router.routerState;
            var routerStateSnapshot = routerState.snapshot;
            console.log(activatedRouteSnapshot);
            console.log(routerState);
            console.log(routerStateSnapshot);
            //如果是从/login这个URL进行的登录，什么都不做
            if (routerStateSnapshot.url.indexOf("/login") == -1) {
                alert("用户登录成功，可以隐藏登录面板了！");
            }
        }, function (error) {
            console.error(error);
        });
    };
    PostDetailMainComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PostDetailMainComponent.prototype.doFollow = function () {
        alert("父组件监听子组件的事件...");
    };
    PostDetailMainComponent = __decorate([
        core_1.Component({
            selector: 'app-post-detail-main',
            templateUrl: './post-detail-main.component.html',
            styleUrls: ['./post-detail-main.component.scss'],
            animations: [
                fly_in_1.flyIn
            ]
        })
    ], PostDetailMainComponent);
    return PostDetailMainComponent;
}());
exports.PostDetailMainComponent = PostDetailMainComponent;
//# sourceMappingURL=post-detail-main.component.js.map