import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './ng-form/form/form.component';
import { ReactiveFormComponent } from './ng-form/reactive-form/reactive-form.component';
import { ReactiveRegistComponent } from './ng-form/reactive-regist/reactive-regist.component';
import { Reactive2FormComponent } from './ng-form/reactive2-form/reactive2-form.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReactiveFormComponent,
    ReactiveRegistComponent,
    Reactive2FormComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
