import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialChannelComponent } from './social-channel/social-channel.component';
import { OnlineContactComponent } from './online-contact/online-contact.component';
import {homeRoutes} from './home.routes';
import {HomeComponent} from "./home.component";

@NgModule({
  imports: [
    // ShareModule,

  ],
  exports:[],
  declarations: [
    SocialChannelComponent,
    HomeComponent,
    OnlineContactComponent],
  providers:[]
})
export class HomeModule { }
