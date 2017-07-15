/**
 * Created by Administrator on 2017/3/31.
 */
function f(input) {
    var a = 100;
    if (input) {
        var b = a + 1; //运行正确
        return b;
    }
    //return b;//错误，b没有被定义
}
