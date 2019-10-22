import { Action } from '@ngrx/store';

export const  INCREMENT = 'INCREMENT';
export const  DECREMENT = 'DECREMENT';
export const  RESET = 'RESET';

const initialState = 0;

export function counterReducer( state: number = initialState , action: Action) {
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

/**
 * 步骤1：为应用程序中的每个数据类型创建一个reducer函数。这些reducer的组合将构成您的应用状态
 */
