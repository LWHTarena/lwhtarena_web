"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var shared_module_1 = require('../shared/shared.module');
var router_1 = require('@angular/router');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var post_detail_component_1 = require('./post-detail/post-detail.component');
var postlist_component_1 = require('./postlist/postlist.component');
var postlist_service_1 = require('./postlist/services/postlist.service');
var post_detail_service_1 = require('./post-detail/services/post-detail.service');
var post_detail_main_component_1 = require('./post-detail-main/post-detail-main.component');
var add_comment_component_1 = require('../comment/add-comment/add-comment.component');
var comment_service_1 = require('../comment/services/comment.service');
var boolean_pipe_1 = require('../utils/boolean-pipe');
var post_routes_1 = require('./post.routes');
var PostModule = (function () {
    function PostModule() {
    }
    PostModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule,
                ng2_bootstrap_1.PaginationModule.forRoot(),
                router_1.RouterModule.forChild(post_routes_1.postRoutes)
            ],
            exports: [boolean_pipe_1.BooleanPipe],
            declarations: [
                postlist_component_1.PostlistComponent,
                post_detail_main_component_1.PostDetailMainComponent,
                post_detail_component_1.PostDetailComponent,
                add_comment_component_1.AddCommentComponent,
                boolean_pipe_1.BooleanPipe
            ],
            providers: [
                postlist_service_1.PostlistService,
                post_detail_service_1.PostDetailService,
                comment_service_1.CommentService
            ]
        })
    ], PostModule);
    return PostModule;
}());
exports.PostModule = PostModule;
//# sourceMappingURL=post.module.js.map