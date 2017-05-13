import {Component, OnInit} from '@angular/core';
import {User} from "../model/user-model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserLoginService} from "./user-login.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public user:User =new User();
  public error:Error;

  constructor(public router:Router,
    public activatedRoute:ActivatedRoute,
    public userLoginService:UserLoginService) {
    console.log(this.userLoginService);
  }

  ngOnInit() {
  }
}
