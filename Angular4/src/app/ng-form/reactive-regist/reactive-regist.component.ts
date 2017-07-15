import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { equalValidator, mobileAsyncValidator, mobileValidator } from '../../validator/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  /*自定义校验器*/
  // mobileValidator(control:FormControl):any{
  //   var myreg =/^(((13[0-9]{1})(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  //   let valid =myreg.test(control.value);
  //   console.log("mobile的校验结果是："+valid);
  //   return valid ?null:{mobile:true};
  // }
  //
  // equalValidator(group:FormGroup):any{
  //   let password:FormControl =group.get("password") as FormControl;
  //   let pconfirm:FormControl =group.get("pconfirm") as FormControl;
  //   let valid:boolean =(password.value == pconfirm.value);
  //   console.log("密码校验结果："+valid);
  //   return valid?null:{equal:true};
  // }

  formModel:FormGroup;

  constructor(fb:FormBuilder) {
    this.formModel =fb.group({
      username:['',[Validators.required,Validators.minLength(6)]],
      mobile:['',mobileValidator,mobileAsyncValidator],
      passwordsGroup:fb.group({
        password:['',Validators.minLength(6)],
        pconfirm:['']
      },{validator:equalValidator}),
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    // let isValid:boolean =this.formModel.get("username").valid;
    //
    // console.log("usernamede 校验结果："+isValid);
    //
    // let errors =this.formModel.get("username").errors;
    // console.log("username 的错误信息是:"+JSON.stringify(errors));
    if(this.formModel.valid){
      console.log(this.formModel.value);
    }
  }

}
