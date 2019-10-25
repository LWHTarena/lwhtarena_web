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
}
