import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducer/counterReducer';
import { DemoRoutingModule } from './demo-routing.module';
import { MaterialModule } from '../material';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CounterComponent, FormComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    DemoRoutingModule,
    StoreModule.forFeature('countlwh', counterReducer)
  ]
})
export class DemoModule { }
