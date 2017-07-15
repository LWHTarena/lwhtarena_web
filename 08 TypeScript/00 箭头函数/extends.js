/**
 * @author：liwenhao【lwhtarena@163.com】
 * Created by Administrator on 2017/1/2.
 * 可以继承一个已存在的类并创建一个派生类，继承使用关键字 extends。
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape3D = (function (_super) {
    __extends(Shape3D, _super);
    function Shape3D(name, width, height, length) {
        var _this = _super.call(this, name, width, height) || this;
        _this.name = name;
        _this.volume = length * _this.area;
        return _this;
    }
    Shape3D.prototype.shoutout = function () {
        return "I'm " + this.name + " with a volume of " + this.volume + " cm cube.";
    };
    Shape3D.prototype.superShout = function () {
        return _super.prototype.shoutout.call(this);
    };
    return Shape3D;
}(Shape));
var cube = new Shape3D("cube", 30, 30, 30);
console.log(cube.shoutout());
console.log(cube.superShout());
