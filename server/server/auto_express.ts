import * as express from "express";

const app =express();

app.get('/',(req,res)=>{
    res.send("hello express");
});

app.get('/product',(req,res) =>{
    res.send("接收到商品查询请求");
});

app.get('/api/products',(req,res) =>{
    res.json(products);
});

app.get('/api/product/:id',(req,res) =>{
    res.json(products.find((product) => product.id ==req.params.id));
});

export class Product{
    constructor(public id:number,
                public title:string,
                public price:number,
                public rating:number,
                public desc:string,
                public categories:Array<string>
    ){}
}

const products:Product[]=[
    new Product(1,"第一个商品",1.98,1.5,"第一个商品，是学习angular入门实战创建的...",["vr商品","硬件设备"]),
    new Product(2,"第二个商品",2.98,2.5,"第二个商品，是学习angular入门实战创建的...",["vr商品","硬件设备"]),
    new Product(3,"第三个商品",3.98,3.5,"第三个商品，是学习angular入门实战创建的...",["硬件设备"]),
    new Product(4,"第四个商品",4.98,4.5,"第四个商品，是学习angular入门实战创建的...",["vr商品","硬件设备"]),
    new Product(5,"第五个商品",5.98,5,"第五个商品，是学习angular入门实战创建的...",["vr商品"]),
    new Product(6,"第六个商品",6.98,5,"第六个商品，是学习angular入门实战创建的...",["vr商品","硬件设备"]),
    new Product(7,"第七个商品",7.98,3.5,"第七个商品，是学习angular入门实战创建的...",["vr商品","硬件设备"]),
];

const server =app.listen(8000,'localhost',()=>{
    console.log("服务器已启动，地址是：http：//localhost：8000");
});