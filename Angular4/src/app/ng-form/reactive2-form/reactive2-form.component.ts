import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive2-form',
  templateUrl: './reactive2-form.component.html',
  styleUrls: ['./reactive2-form.component.css']
})
export class Reactive2FormComponent implements OnInit {

  /**定义响应式表单**/
  user:FormGroup;

  constructor() { }

  ngOnInit() {
    //初始化表单
    this.user = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}/)]),
      passwork: new FormControl('', [Validators.required]),
      repeat:new FormControl('', [Validators.required]),
      address:new FormGroup({
        province:new FormControl(),
        city:new FormControl(),
        area:new FormControl(),
        addr:new FormControl()
      })
    });
  }

  onSubmit({value,valid}){
    if(!valid) return;
    console.log(JSON.stringify(value));
  }
}
