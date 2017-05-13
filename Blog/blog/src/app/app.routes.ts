/**
 * Created by Administrator on 2017/3/11.
 */

import {RouterModule} from '@angular/router';
import {ChartComponent} from "./chart/chart.component";

export const appRoutes=[{
  path:'',
  redirectTo:'posts',
  pathMath:'full'
},{
  path:'echart',
  component:ChartComponent
},{
  path:'home',
  loadChildren:'./home/home.module#HomeModule'
}];
