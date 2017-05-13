# 箭头函数 lambda表达式
>
>lambda表达式()=>{something} 或something 相当于js中的函数，是可以自动将函数中的this附加到上下文中。

## 箭头函数的使用
>
> 简化函数定义的一种方式

在ES5中,不管我们是传递函数参数,必须使用function关键字和一对大括号{ }

    // ES5-like example
    var data = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship'];
    data.forEach(function(line) { console.log(line); });
    
如果使用 => ,我们可以像下面这样:

    // Typescript example
    var data: string[] = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship']; 
    data.forEach( (line) => console.log(line));

> =>可以作为表达式:

    var evens = [2,4,6,8];
    var odds = evens.map(v => v + 1);

> 或者作为语句:

    data.forEach( line => {
      console.log(line.toUpperCase())
    });
    
> 箭头函数的一个重要作用就是共享this,这个跟JavaScript不一样,如下:

    var nate = {
        name: "Nate",
        guitars: ["Gibson", "Martin", "Taylor"], printGuitars: function () {
            var self = this;
            this.guitars.forEach(function (g) {
                // this.name is undefined so we have to use self.name
                console.log(self.name + " plays a " + g);
            });
        }
    };
    
> 因为=>可以共享this,所以我们可以像下面这样:

    var nate = {
        name: "Nate",
        guitars: ["Gibson", "Martin", "Taylor"], printGuitars: function () {
            this.guitars.forEach((g) => {
                console.log(this.name + " plays a " + g);
            });
        }
    }
    
> =>可以让你的内部函数更加清晰,它使得在JavaScript中使用高阶函数变得容易.