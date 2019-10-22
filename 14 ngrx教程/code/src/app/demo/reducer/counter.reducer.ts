import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from '../action/counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

/**
 * 不要忘了 Import the StoreModule from @ngrx/store and the counter.reducer file.
 * 例如：src/app/app.module.ts (imports)
 *     import { StoreModule } from '@ngrx/store';
 *     import { counterReducer } from './counter.reducer';
 *
 * 在一些应用中，我们需要处理一些非纯函数action，例如ajax请求，在ngrx中，我们就要使用到了Effects.
 * **/
