/**
 * @author：liwenhao【lwhtarena@163.com】
 * Created by Administrator on 2017/1/2.
 */

// var shape ={
//     name:"rectangle",
//     popup:function () { //弹出
//         console.log("弹出..."+this.name);
//         setTimeout(function () {
//             console.log("这是inside setTimeout（）："+ this.name);
//             console.log("我是"+this.name+"!");
//         },3000)
//     }
// }
//
// shape.popup(); //实例中的 this.name 是一个空值：


//--==========================>接下来我们使用TypeScript的箭头函数。把function()替换为() =>

var shape ={
    name:"rectangle",
    popup:function () { //弹出
        console.log("弹出..."+this.name);
        setTimeout(()=>{
            console.log("这是inside setTimeout（）："+ this.name);
            console.log("我是"+this.name+"!");
        },3000)
    }
}

shape.popup();