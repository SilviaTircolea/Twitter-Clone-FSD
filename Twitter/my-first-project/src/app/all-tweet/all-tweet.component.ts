import { Component, EventEmitter, Input, Output } from '@angular/core';
import { formatDistance, parseISO } from 'date-fns';
import { ITweet } from '../interface/tweet.interface';

@Component({
  selector: 'app-all-tweet',
  templateUrl: './all-tweet.component.html',
  styleUrls: ['./all-tweet.component.css']
})
export class AllTweetComponent {
  @Input() tweet!: ITweet;
  @Output() tweetLiked = new EventEmitter<ITweet>();
  @Output() tweetCommented = new EventEmitter<{
    tweet: ITweet;
    comment: string;
  }>();
  constructor() {}

  get tweetCreatedAt(): string {
    if (!this.tweet) {
      return '';
    }
    return formatDistance(parseISO(this.tweet?.createdAt), new Date());
  }

  commentOnTweet() {
    const comment = prompt("What's your comment?");
    if (comment && comment.trim().length) {
      this.tweetCommented.emit({
        tweet: this.tweet,
        comment,
      });
    }
  }

  ngOnInit(): void {}
}
