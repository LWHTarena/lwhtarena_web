"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
var rx_1 = require("rx");
var input1 = jquery_1.default('#input1');
var input2 = jquery_1.default('#input2');
var source = rx_1.default.Observable.amb(rx_1.default.Observable.fromEvent(input1, 'click').map(function () { return 'one'; }), rx_1.default.Observable.fromEvent(input2, 'click').map(function () { return 'two'; }));
var subscription = source.subscribe(function (x) {
    console.log(x);
}, function (err) {
    console.log('Error: ' + err);
}, function () {
    console.log('Completed');
});
