import {
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
  Action,
  ActionReducerMap,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 *
 * 每个reducer模块的默认导出都是reducer 函数本身。此外，每个模块都应导出描述reducer状态以及所有selector函数
 * 的类型或接口。 “ * as”符号将所有导出打包到一个对象中。
 */

import * as fromLayout from '../core/reducers/layout.reducer';
import { InjectionToken } from '@angular/core';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 *
 * 如前所述，我们将每个reducer都视为数据库中的表。这意味着我们的顶级状态接口只是键到内部状态类型的映射。
 */
export interface State {
  [fromLayout.layoutFeatureKey]: fromLayout.State;
  router: fromRouter.RouterReducerState<any>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 *
 * 我们的状态由action reducer 函数组成，这些reducer 函数在每个分派的action以及当前或初始状态下被调用，并返回新的不可变状态。
 */
export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    [fromLayout.layoutFeatureKey]: fromLayout.reducer,
    router: fromRouter.routerReducer,
  }),
});

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 *
 * 默认情况下，@ngrx/store 使用combineReducers和reducer映射来组合根 meta-reducer。要添加
 * 更多 meta-reducer ，请提供一系列 meta-reducer ，这些数组将组成根meta-reducer。
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

/**
 * Layout Reducers
 */
export const getLayoutState = createFeatureSelector<State, fromLayout.State>(
  'layout'
);

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
);
