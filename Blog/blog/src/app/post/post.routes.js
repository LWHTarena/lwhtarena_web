"use strict";
var post_detail_main_component_1 = require('./post-detail-main/post-detail-main.component');
var postlist_component_1 = require('./postlist/postlist.component');
exports.postRoutes = [
    {
        path: '',
        redirectTo: 'page/1',
        pathMatch: 'full'
    },
    {
        path: 'page/:page',
        component: postlist_component_1.PostlistComponent
    },
    {
        path: 'postdetail/:postId',
        component: post_detail_main_component_1.PostDetailMainComponent
    }
];
//# sourceMappingURL=post.routes.js.map