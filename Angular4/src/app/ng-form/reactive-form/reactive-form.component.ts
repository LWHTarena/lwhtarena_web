import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formModel:FormGroup =new FormGroup({
    username:new FormControl("aaa"),
    dateRange:new FormGroup({
      from:new FormControl(),
      to:new FormControl()
    }),
    emails:new FormArray([
      new FormControl("liwenhao@winhong.com"),
      new FormControl("liwh@163.com")
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.formModel.value);
  }

  addEmail(){
    let emails =this.formModel.get("emails") as FormArray;
    emails.push(new FormControl());
  }

}
