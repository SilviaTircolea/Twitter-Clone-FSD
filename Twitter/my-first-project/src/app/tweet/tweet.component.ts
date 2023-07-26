import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formatDistance, parseISO } from 'date-fns';


@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit{
  @Input() footer: Boolean = true;
  @Input() counters: Boolean = false;
  @Input() tweet!:any


  constructor(private router: Router) {
  }

  ngOnInit(): void {

    console.log('tweet compo',this.tweet);

  }

  formatDistance(date: Date): string {
    return formatDistance(date,  new Date());
  }

 parseISO(value: string): Date {
    return parseISO(value);
  }

  goToTweet(tweetId: any){

  }

}
