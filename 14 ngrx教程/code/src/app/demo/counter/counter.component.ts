import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { DECREMENT, INCREMENT, RESET } from '../reducer/counterReducer';


/**
 * 在Ngrx中数据保存在store中，保存的数据叫state，这个state可以是一个树状
 * 结构，我们可以将树状结构的第一级作为模块，然后将每个模块里面的数据对象也
 * 尽量的按照数据本身的关系，以树状方式组织。
 */
interface AppState {
  count: number;
}


@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  countt$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.countt$ = store.pipe(select('countlwh'));
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
