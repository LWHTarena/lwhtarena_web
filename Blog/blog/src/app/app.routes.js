/**
 * Created by Administrator on 2017/3/11.
 */
"use strict";
var chart_component_1 = require("./chart/chart.component");
exports.appRoutes = [{
        path: '',
        redirectTo: 'posts',
        pathMath: 'full'
    }, {
        path: 'echart',
        component: chart_component_1.ChartComponent
    }, {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    }];
//# sourceMappingURL=app.routes.js.map