import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FormComponent } from './form/form.component';


export const routes:Routes =[
  { path:'demo1' ,component: CounterComponent},
  { path:'form' ,component:FormComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DemoRoutingModule { }
