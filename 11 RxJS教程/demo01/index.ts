
import $ from "jquery";
import Rx from "rx";
var input1 = $('#input1');
var input2 = $('#input2');

var source = Rx.Observable.amb(
    Rx.Observable.fromEvent(input1, 'click').map(()=>'one'),
    Rx.Observable.fromEvent(input2, 'click').map(()=>'two')
);
var subscription = source.subscribe(
    function (x) {
        console.log(x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    }
);