import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthActions } from '../../auth/actions';
import * as fromAuth from '../../auth/reducers';
import * as fromRoot from '../../reducers';
import { LayoutActions } from '../../core/actions';

@Component({
  selector: 'bc-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-layout>
      <bc-sidenav [open]="showSidenav$ | async" (closeMenu)="closeSidenav()">
        <bc-nav-item (navigate)="closeSidenav()" *ngIf="loggedIn$ | async" routerLink="/" icon="book" hint="查看您的藏书">
            我的收藏
        </bc-nav-item>
        <bc-nav-item (navigate)="closeSidenav()" *ngIf="loggedIn$ | async" routerLink="/books/find" icon="search" hint="查找您的下一本书！">
            浏览书籍
        </bc-nav-item>
        <bc-nav-item (navigate)="closeSidenav()" *ngIf="loggedIn$ | async" routerLink="/demos/demo1" icon="book" hint="案例1">
            案例1
        </bc-nav-item>
        <bc-nav-item (navigate)="closeSidenav()" *ngIf="!(loggedIn$ | async)">
            注册
        </bc-nav-item>
        <bc-nav-item (navigate)="logout()" *ngIf="loggedIn$ | async">
            退出
        </bc-nav-item>
      </bc-sidenav>
      <bc-toolbar (openMenu)="openSidenav()">
          藏书
      </bc-toolbar>

      <router-outlet></router-outlet>
    </bc-layout>
  `,
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State & fromAuth.State>) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav));
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(LayoutActions.closeSidenav());
  }

  openSidenav() {
    this.store.dispatch(LayoutActions.openSidenav());
  }

  logout() {
    this.closeSidenav();

    this.store.dispatch(AuthActions.logoutConfirmation());
  }
}
