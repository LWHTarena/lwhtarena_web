/**
 * Created by Administrator on 2017/5/11.
 */

class Persion{
    constructor(public age:number){

    }

    growOld = () =>{
        this.age++;
    }
}

var persion =new Persion(2);

setTimeout(persion.growOld,1000);

setTimeout(function () {
    debugger
},2000);


/**
 * 这会有效的原因是 this 的引用被箭头函数从函数体外部捕获了。这等价于下面这
 * 段 JavaScript 代码（如果你没有 TypeScript 你也可以自己写）：
 */
// function Person(age) {
//     this.age = age
//     var _this = this;  // 捕获 this
//     this.growOld = function() {
//         _this.age++;   // 使用被捕获的 this
//     }
// }
// var person = new Person(1);
// setTimeout(person.growOld,1000);
//
// setTimeout(function() { console.log(person.age); },2000); // 2