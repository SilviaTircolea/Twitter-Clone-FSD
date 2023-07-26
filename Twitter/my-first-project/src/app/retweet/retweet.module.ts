import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetweetRoutingModule } from './retweet-routing.module';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RetweetRoutingModule,
    SharedModule
  ],
})
export class RetweetModule { }
