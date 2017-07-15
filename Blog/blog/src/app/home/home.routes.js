"use strict";
exports.__esModule = true;
var home_component_1 = require("./home.component");
exports.homeRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        children: [{
                path: '',
                loadChildren: '../post/post.module#PostModule'
            }]
    }
];
//# sourceMappingURL=home.routes.js.map