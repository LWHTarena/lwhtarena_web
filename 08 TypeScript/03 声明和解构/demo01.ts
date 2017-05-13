/**
 * Created by Administrator on 2017/3/31.
 */

function f(input:boolean){
    let a =100;
    if(input){
        let b =a+1;//运行正确
        return b;
    }
    //return b;//错误，b没有被定义
}