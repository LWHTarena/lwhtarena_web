import {NgModule} from '@angular/core';
import {SharedModule} from "./shared.module";
import {ModalModule,PaginationModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    SharedModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot()
    ],
  exports: [
    ModalModule,
    PaginationModule
  ],
  declarations: [],
  providers: [],
})
export class PostSharedModule {
}

