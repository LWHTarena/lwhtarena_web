/**
 * @author：liwenhao【lwhtarena@163.com】
 * Created by Administrator on 2017/1/2.
 * 可以继承一个已存在的类并创建一个派生类，继承使用关键字 extends。
 */

class Shape3D extends Shape{
    volume:number;
    constructor(public name: string, width: number, height: number, length: number ){
        super( name, width, height );
        this.volume = length * this.area;
    }
    shoutout() {
        return "I'm " + this.name +  " with a volume of " + this.volume + " cm cube.";
    }

    superShout() {
        return super.shoutout();
    }
}


var cube = new Shape3D("cube", 30, 30, 30);
console.log( cube.shoutout() );
console.log( cube.superShout() );
