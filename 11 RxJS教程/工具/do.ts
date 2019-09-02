// RxJS v6+
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5);
// 使用 tap 透明地打印 source 中的值
const example = source.pipe(
    tap(val => console.log(`BEFORE MAP: ${val}`)),
    map(val => val + 10),
    tap(val => console.log(`AFTER MAP: ${val}`))
);

// 'tap' 并不转换值
// 输出: 11...12...13...14...15
const subscribe = example.subscribe(val => console.log(val));
