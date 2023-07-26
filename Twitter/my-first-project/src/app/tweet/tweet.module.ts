import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetRoutingModule } from './tweet-routing.module';
import { ReplyModule } from '../reply/reply.module';
import { LikeModule } from '../like/like.module';
import { RetweetModule } from '../retweet/retweet.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    TweetRoutingModule,
    ReplyModule,
    LikeModule,
    RetweetModule,
  ],
})
export class TweetModule { }
