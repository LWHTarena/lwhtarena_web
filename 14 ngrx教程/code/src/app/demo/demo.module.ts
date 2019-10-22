import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducer/counterReducer';
import { DemoRoutingModule } from './demo-routing.module';
import { MaterialModule } from '../material';



@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DemoRoutingModule,
    StoreModule.forFeature('countlwh',counterReducer)
  ]
})
export class DemoModule { }
