import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AuthModule } from '../app/auth';

import { ROOT_REDUCERS, metaReducers } from '../app/reducers';

import { CoreModule } from '../app/core';
import { AppRoutingModule } from '../app/app-routing.module';
import { UserEffects, RouterEffects } from '../app/core/effects';
import { AppComponent } from '../app/core/containers';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     *
     * StoreModule.forRoot在根模块中一次导入，接受一个reducer函数或reducer函数的对象映射。
     * 如果传递了reducers对象，则会运行 combineReducers 创建您的应用程序meta-reducer。这将
     * 返回基于 @ngrx/store 的应用程序的所有提供程序。
     */
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     * @ngrx/router-store使路由器状态在存储中保持最新。
     */
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     * Store devtools对store进行检测，以保留状态的过去版本并重新计算新状态。这样可以进行强大的时间旅行调试。
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrument({
      name: 'NgRx Book Store App',

      // In a production build you would want to disable the Store Devtools
      // logOnly: environment.production,
    }),

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     * EffectsModule.forRoot（）在根模块中导入一次，并将effects class设置为在应用程序启动时立即初始化。
     *
     * See: https://ngrx.io/guide/effects#registering-root-effects
     */
    EffectsModule.forRoot([UserEffects, RouterEffects]),
    CoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
