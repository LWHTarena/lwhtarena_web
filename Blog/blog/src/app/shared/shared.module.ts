import {NgModule,ModuleWithProviders} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TranslateModule } from 'ng2-translate';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [],
  providers: [],
})
export class SharedModule {
}
