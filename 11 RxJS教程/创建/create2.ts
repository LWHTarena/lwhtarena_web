// RxJS v6+
import { Observable } from 'rxjs';

/*
  每秒自增值并且只发出偶数
*/
const evenNumbers = Observable.create(function(observer) {
    let value = 0;
    const interval = setInterval(() => {
        if (value % 2 === 0) {
            observer.next(value);
        }
        value++;
    }, 1000);

    return () => clearInterval(interval);
});
// 输出: 0...2...4...6...8
const subscribe = evenNumbers.subscribe(val => console.log(val));
// 10秒后取消订阅
setTimeout(() => {
    subscribe.unsubscribe();
}, 10000);
