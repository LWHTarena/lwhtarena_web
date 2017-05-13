/**
 * @author：liwenhao【lwhtarena@163.com】
 * Created by Administrator on 2017/1/2.
 * 箭头函数的使用：
 *  1)、 => 来简化函数定义的一种方式
 *    在ES5中,不管我们是传递函数参数,必须使用function关键字和一对大括号{ }
 */

var data:string[] =['liwenhao', 'paul dfifer','louis blakenship'];
data.forEach((line)=>console.log(line));

var events =[2,4,6,8];
// var odds =events.map(v =>v+1); //作为表达式
var odds =events.map((v) => v+1); //
console.log(odds)

data.forEach(line=>{ //作为语句
    console.log(line.toUpperCase())
})


// var nate ={
//     name:"Name",
//     guitars:["Gibson", "Martin", "Taylor"],
//     printGuitars:function(){
//         var self =this;
//         this.guitars.forEach(function (g) {
//             console.log(self.name+"play a "+g);
//         })
//     }
// }
//
// nate.printGuitars();

//========> 共享this
var nate ={
    name:"Name",
    guitars:["Gibson", "Martin", "Taylor"],
    printGuitars:function(){
        this.guitars.forEach((g)=> {
            console.log(this.name+"play a "+g);
        })
    }
}

nate.printGuitars();


