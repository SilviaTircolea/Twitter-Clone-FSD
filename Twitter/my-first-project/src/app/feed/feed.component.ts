import { Component, OnInit } from '@angular/core';
import { TweetService } from "../services/tweet.service";
import { validateTweetContent } from "../validation/tweet-validation";
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  tweets: any[];
  newTweet: string;

  constructor(private tweetService: TweetService, private router: Router) {
    this.tweets = [];
    this.newTweet = '';
  }

  ngOnInit(): void {
    this.getFeed();
  }

  getFeed(): void {
    this.tweetService.getFeed().subscribe({
      next: (response) => {
        this.tweets = response;
      },
      error: () => {
      }
    });
  }

  postTweet(): void {
    const errors = validateTweetContent(this.newTweet);
    if (errors.length > 0) {
      return;
    }
    const tweet = {
      content: this.newTweet
    };

    this.tweetService.postTweet(tweet).subscribe({
      next: () => {
        this.newTweet = '';
        this.getFeed();
      },
      error: () => {
      }
    });
  }

  likeTweet(tweet: any): void {
    this.tweetService.likeTweet(tweet.id).subscribe({
      next: () => {
        this.getFeed();
      },
      error: () => {
      }
    });
  }

  commentOnTweet(value:any): void {
  }

  retweet(tweet: any): void {
    this.tweetService.retweet(tweet.id).subscribe({
      next: () => {
        this.getFeed();
      },
      error: () => {
      }
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login'])
      .then(() => {
        console.log('Navigation to login page successful');
      })
      .catch((error) => {
        // Handle navigation error
        console.error('Error occurred during navigation to login page:', error);
      });
  }
}
