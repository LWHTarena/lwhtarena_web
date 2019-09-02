// RxJS v6+
import { defaultIfEmpty } from 'rxjs/operators';
import { empty } from 'rxjs';

// 当源 observable 为空时，发出 'Observable.empty()!'，否则发出源的任意值
const example = empty().pipe(defaultIfEmpty('Observable.empty()!'));
// 输出: 'Observable.empty()!'
const subscribe = example.subscribe(val => console.log(val));
