一：angular 的通信
1、使用@Output @Input
2、通过服务实现组件之间的通信EventEmitter
   注意：现在的场景是这样的，界面是由N多个组件组成的，如果一个组件中修改了接口的内容，其他组件需
  要调接口刷新数据，那么就用到了EventEmitter
