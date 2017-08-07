/**
 * Created by Administrator on 2017/7/15.
 */
/*简单的响应式编程*/

var add =function (x,y) {
    return x+y;
}

var multiply =function (x,y) {
    return x*y;
}

var flock_a =4;
var flock_b =2;
var flock_c =0;
var result =add(multiply(flock_b,add(flock_a,flock_c)),multiply(flock_a,flock_b));

console.log(result);

/*=============Make the raw clicks stream===============*/
var button =document.querySelector(".this");
var clickStream =Rx.Observable.fromEvent(button, 'click');


var multiClickStream =clickStream.buffer(function () {
    return clickStream.throttle(250);
}).map(function (list) {
    return list.length;
}).filter(function (x) {
    return x>=2;
});


// Same as above, but detects single clicks
var singleClickStream = clickStream.buffer(function () {
    return clickStream.throttle(250);
}).map(function (list) {
    return list.length;
}).filter(function (x) {
    return x ===1;
})

singleClickStream.subscribe(function (event) {
    document.querySelector("h2").textContent ="click";
});

multiClickStream.subscribe(function (numClicks) {
    document.querySelector("h2").textContent =""+numClicks+"x click ";
})

Rx.Observable.merge(singleClickStream,multiClickStream).throttle(1000)
    .subscribe(function (suggestion) {
        document.querySelector("h2").textContent ="";
    })


