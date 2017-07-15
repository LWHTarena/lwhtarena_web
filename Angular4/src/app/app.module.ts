import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './ng-form/form/form.component';
import { ReactiveFormComponent } from './ng-form/reactive-form/reactive-form.component';
import { ReactiveRegistComponent } from './ng-form/reactive-regist/reactive-regist.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReactiveFormComponent,
    ReactiveRegistComponent
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
