import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../navbar/navbar.module';
import { NewTweetComponent } from '../new-tweet/new-tweet.component';
import { AllTweetComponent } from '../all-tweet/all-tweet.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    NewTweetComponent,
    AllTweetComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    SharedModule
  ]
})
export class HomeModule { }
