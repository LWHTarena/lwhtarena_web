"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var shared_module_1 = require('../shared/shared.module');
var post_module_1 = require('../shared/post.module');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var write_post_component_1 = require('../post/write-post/write-post.component');
var user_main_component_1 = require('./user-main/user-main.component');
var post_table_service_1 = require('../manage/post-table/services/post-table.service');
var user_routes_1 = require('./user.routes');
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            declarations: [
                user_main_component_1.UserMainComponent,
                write_post_component_1.WritePostComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                ng2_bootstrap_1.AlertModule,
                ng2_bootstrap_1.AccordionModule,
                shared_module_1.SharedModule,
                post_module_1.PostSharedModule,
                router_1.RouterModule.forChild(user_routes_1.userRoutes)
            ],
            exports: [
                user_main_component_1.UserMainComponent
            ],
            providers: [
                post_table_service_1.PostTableService
            ]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map