import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HighComponent } from './directive/high.component';

const APP_ROUTES:Routes =[
  {path:'user/:id',component:UserComponent},
  // {path:'user/:id',component:UserComponent,children:USER_ROUTES},
  {path:'',component:HighComponent},
  {path:'**',redirectTo:'/user/1',pathMatch:'full'}

];

export const routing =RouterModule.forRoot(APP_ROUTES);

/***
 * Router（路由器）
 *      为激活的URL显示应用组件。管理从一个组件到另一个组件的导航
 *
 * RouterModule（路由器模块）
 *      一个独立的Angular模块，用于提供所需的服务提供商，以及用来在应用视图之间进行导航的指令。
 *
 * Routes（路由数组）
 *      定义了一个路由数组，每一个都会把一个URL路径映射到一个组件。
 *
 * Route（路由）
 *      定义路由器该如何根据URL模式（pattern）来导航到组件。大多数路由都由路径和组件类构成。
 *
 * RouterOutlet（路由出口）
 *    该指令（<router-outlet>）用来标记出路由器该在哪里显示视图。
 *
 * RouterLink（路由链接）
 *    该指令用来把一个可点击的HTML元素绑定到路由。 点击带有绑定到字符串或链接参数数组的routerLink指令的元素就会触发一次导航。
 *
 * RouterLinkActive（活动路由链接）
 *    当HTML元素上或元素内的routerLink变为激活或非激活状态时，该指令为这个HTML元素添加或移除CSS类。
 *
 * ActivatedRoute（激活的路由）
 *    为每个路由组件提供提供的一个服务，它包含特定于路由的信息，比如路由参数、静态数据、解析数据、全局查询参数和全局碎片（fragment）。
 *
 * RouterState（路由器状态）
 *    路由器的当前状态包含了一棵由程序中激活的路由构成的树。它包含一些用于遍历路由树的快捷方法。
 *
 * 链接参数数组
 *    这个数组会被路由器解释成一个路由操作指南。我们可以把一个RouterLink绑定到该数组，或者把它作为参数传给Router.navigate方法。
 * */
