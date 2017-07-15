/**
 * @author：liwenhao【lwhtarena@163.com】
 * Created by Administrator on 2017/1/2.
 * TypeScript支持集成了可选的类型批注支持的ECMAScript 6的类。
 */
var Shape = (function () {
    function Shape(name, width, height) {
        this.name = name;
        this.width = width;
        this.area = width * height;
        this.color = "pink";
    }
    Shape.prototype.shutout = function () {
        return "我是" + this.color + " 面积为" + this.area;
    };
    return Shape;
}());
var square = new Shape("square", 30, 30);
console.log(square.shutout());
console.log("面积 ：" + square.area);
console.log("名称：" + square.name);
console.log("颜色：" + square.color);
console.log("宽：" + square.width);
console.log("高：" + square.height);
