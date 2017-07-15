"use strict";
var user_main_component_1 = require("./user-main/user-main.component");
var user_profile_component_1 = require("./user-profile/user-profile.component");
var comment_table_component_1 = require("../manage/comment-table/comment-table.component");
var post_table_component_1 = require("../manage/post-table/post-table.component");
var write_post_component_1 = require("../post/write-post/write-post.component");
exports.userRoutes = [{
        path: '',
        component: user_main_component_1.UserMainComponent,
        children: [
            { path: '', redirectTo: 'posttable/page/1', pathMatch: 'full' },
            { path: 'write', component: write_post_component_1.WritePostComponent },
            { path: 'posttable/page/:page', component: post_table_component_1.PostTableComponent },
            { path: 'commenttable/page/:page', component: comment_table_component_1.CommentTableComponent },
            { path: 'profile', component: user_profile_component_1.UserProfileComponent },
            { path: '**', redirectTo: 'write' }
        ]
    }];
//# sourceMappingURL=user.routes.js.map