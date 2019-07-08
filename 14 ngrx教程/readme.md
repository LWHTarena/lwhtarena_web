# Reactive Extensions for Angular(angular 的rxjs扩展)

以下文档适用于NxRx版本6.x

## @ngrx/store

RxJS为Angular应用程序提供动力状态管理，受Redux的启发

@ ngrx / store是一个受控状态容器，旨在帮助在Angular之上编写高性能，一致的应用程序。 核心原则：

- State是一个单一的，不可变的数据结构。
- Actions描述状态（state）变化。
- 称为reducers的纯函数采用先前的状态和下一个动作来计算新状态。 
- 通过Store访问的状态，可观察的状态和行动的观察者。 State accessed with the Store, an observable of state and an observer of actions.

### 依赖安装

`npm install @ngrx/store` or `yarn add @ngrx/store`

### 使用技巧

1、为应用程序中的每种数据类型创建一个reducer函数。 这些Reducer的组合将构成您的应用程序状态：

```typescript
// counter.ts
import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

const initialState = 0;

export function counterReducer(state: number = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
}
```

2、要在应用程序中注册状态容器（state container），请导入reducer并在AppModule中@NgModule装饰器的imports数组中使用`StoreModule.forRoot`函数。
```typescript
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';

@NgModule({
  imports: [StoreModule.forRoot({ count: counterReducer })],
})
export class AppModule {}
```

3、然后，您可以将Store服务注入到组件和服务中。 使用select运算符选择状态切片：
```typescript
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET } from './counter';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-my-counter',
  template: `
    <button (click)="increment()">Increment</button>
    <div>Current Count: {{ count$ | async }}</div>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset Counter</button>
  `,
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }
  increment() {
    this.store.dispatch({ type: INCREMENT });
  }
  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }
  reset() {
    this.store.dispatch({ type: RESET });
  }
}
```

## @ngrx/effects

RxJS为@ngrx/store提供effect model

@ngrx/effects提供了一个API来将事件源建模为actions.Effects：

+ 监听从@ngrx/store发送的操作（actions dispatched）。
+ 隔离组件的副作用，允许更纯的组件选择状态和调度操作。
+ 提供新的操作源，以根据外部交互（如网络请求，Web套接字消息和基于时间的事件）减少状态。

### 依赖安装

`npm install @ngrx/effects --save` OR `yarn add @ngrx/effects`

### 使用技巧

Effects 是使用两个主要API的可注入服务类。
+ Effect装饰器（`Effect()`）
+ Actions Observable

1、创建AuthEffects服务来描述登录操作源的：
```typescript
// ./effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  // Listen for the 'LOGIN' action
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType('LOGIN'),
    mergeMap(action =>
      this.http.post('/auth', action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: 'LOGIN_SUCCESS', payload: data })),
        // If request fails, dispatch failed action
        catchError(() => of({ type: 'LOGIN_FAILED' }))
      )
    )
  );
  constructor(private http: HttpClient, private actions$: Actions) {}
}
```

2、在应用程序根导入中注册EffectsModule。 必须将此EffectsModule添加到根NgModule中，才能注册效果提供程序，并在加载应用程序时启动。
```typescript
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';

@NgModule({
  imports: [EffectsModule.forRoot([AuthEffects])],
})
export class AppModule {}
```
3、功能模块

对于功能模块（Feature Modules），请通过模块导入中的EffectsModule.forFeature方法注册effects：
```typescript
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './effects/admin.effects';

@NgModule({
  imports: [EffectsModule.forFeature([AdminEffects])],
})
export class AdminModule {}
```

## @ngrx/router-store

将Angular路由器与@ngrx/store连接的绑定

### 依赖安装

`npm install @ngrx/router-store --save` OR `yarn add @ngrx/router-store`

### 使用技巧

@ngrx/router-store提供了五个按特定顺序分派的导航操作。@ngrx/router-store提供的routerReducer使用操作给出的最新路由器状态更新其状态。

+ actions的顺序
 + Success case:
  + ROUTER_REQUEST 在每次导航开始时，路由器将调度ROUTER_REQUEST操作。
  + ROUTER_NAVIGATION
  + ROUTER_NAVIGATED 导航成功后，路由器将调度ROUTER_NAVIGATED操作。
 + Error / Cancel case (with early Navigation Action Timing):
  + ROUTER_REQUEST
  + ROUTER_NAVIGATION
  + ROUTER_CANCEL / ROUTER_ERROR
 + Error / Cancel case (with late Navigation Action Timing)
  + ROUTER_REQUEST
  + ROUTER_CANCEL / ROUTER_ERROR
 
1、
```typescript
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    RouterModule.forRoot([
      // routes
    ]),
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
 
 

