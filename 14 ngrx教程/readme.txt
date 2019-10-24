核心知识点

1、reducer是一个纯函数，可以接收到“任何”Action。

2、effect是可以监听action的一个流，可以通过pipe做一些逻辑处理，如发送http请求，也可以把流中的数据转换成其他
的action(如http请求发送完返回成功的请求成功的action) 在发送到reducer ,主要用到rxjx pipe(通道)中的管道
符(map, switchMap, tap)，需要注意的是一个action被发送会先走reducer再走effect，当然也果没有对应action的reducer 
就直接走对应的effect
