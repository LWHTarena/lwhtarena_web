import { Component, OnInit } from '@angular/core';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  /**在providers中配置FormService**/
  providers:[FormService]
})
export class FormComponent implements OnInit {

  uname ='';
  passpwd ='';

  name ='';
  password ='';

  name2 ='';
  password2 ='';
  /**
   * 在构造函数中将FormService示例注入到成员变量service
   * 而且我们不需要显示声明成员编service了
   * **/
  constructor(private service: FormService) { }

  ngOnInit() {
  }

  onClick(){
    console.log('button was clicked');
  }

  /**
   * 要在click中传递一个参数，可以在文本输入框标签加一个#usernameRef，
   * 这叫引用，意指引用的是input对象，如果传递是input值usernameRef.value
   */
  onClick2(username){
    console.log('button was clicked',username);
  }

  login(username,pwd){
    console.log('auth result is',this.service.loginWithCredentials(username,pwd));
  }

  /**
   * input控件上添加了required 这个属性，表明这两个控件为必填属性。
   * 通过#nameRef="ngModel"类似这样的引用，我们重新又加入了引用，这
   * 次引用指向了ngModel，为了在模板使用--{{...}}
   *
   * *ngIf="nameRef.errors?.required" 意思是当nameRef.errors.required 为true时显示
   * div标签。那么`？`时干嘛用？因为errors可能为null，如果这个时候调用errors的required
   * 属性肯定会引发异常。那么`?`就是表明errors可能为空，在其为空就不用调用后面的属性了
   */
  vaClick(){
    console.log("表单验证")
  }

  onSubmit(formValue){
    console.log(formValue);
  }
}
