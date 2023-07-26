import { NgModule } from '@angular/core';
import { TweetComponent } from './tweet/tweet.component';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LikeComponent } from './like/like.component';
import { RetweetComponent } from './retweet/retweet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReplyComponent } from './reply/reply.component';


@NgModule({
    declarations: [
        TweetComponent,
        BookmarkComponent,
        LikeComponent,
        RetweetComponent,
        ReplyComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        TweetComponent,
        BookmarkComponent,
        LikeComponent,
        RetweetComponent,
        ReplyComponent
    ]
  })
  export class SharedModule { }