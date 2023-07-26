import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplyRoutingModule } from './reply-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReplyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class ReplyModule { }
