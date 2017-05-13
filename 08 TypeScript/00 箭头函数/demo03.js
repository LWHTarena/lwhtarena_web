/**
 * this 在 JavaScript 中一直是一个痛点。就像一个智者曾经说过的那样，“我讨厌 JavaScript，因为
 * 它往往太轻易地失去了 this 的意义”。胖箭头通过从周围上下文捕获 this 的意义修复了它。考虑这个
 * 纯 JavaScript 类：
 */

function Persion(age) {
    this.age =age;
    this.growOld =function () {
        this.age++;
    }
}

var persion =new Persion(1);
setTimeout(persion.growOld,1000);


setTimeout(function () {
    console.log(persion.age);
},2000) //1，应该是2

/**
 * 如果你在浏览器上运行这段代码，函数中的 this 会指向 window 因为 window 会是那个执
 * 行 growOld 函数的对象。修复的方案是使用箭头函数：
 * */

