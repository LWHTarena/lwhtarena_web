import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http,Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  dataSource:Observable<any>;

  products:Array<any> =[];

  ayncProducts:Observable<any>;

  constructor(private http:Http) {

    let myHeader:Headers = new Headers();
    myHeader.append("authorization","Baisc 123456");

    this.dataSource =this.http.get("/api/products",{headers:myHeader})
      .map((res) => res.json());

    this.ayncProducts =this.http.get("/api/products").
      map((res) => res.json());
  }

  ngOnInit() {
    /*订阅 --发送请求*/
    this.dataSource.subscribe(
      (data) => this.products =data
    );
  }

}
