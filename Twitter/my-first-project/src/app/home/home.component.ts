import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ITweet } from '../interface/tweet.interface';
import { formatISO } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navigationSubscription:any;
  newTweetForm: FormGroup;
  tweets =[];
  username: any;

  constructor(
    private router: Router,
  ) {
    this.newTweetForm = new FormGroup({
      text: new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('userName')
   this.fetchTweets()
  }


  fetchTweets() {
    let data: any = JSON.parse(localStorage.getItem('tweets') || '[]');
    this.tweets = data

  }

  tweet(){
    let data: any = JSON.parse(localStorage.getItem('tweets') || '[]');
   if(this.newTweetForm.get("text")?.value.trim() == '') return
      let tweetData = {
      id:data.length+1,
      firstName:this.username,
      lastName:'',
      username:this.username,
      duration:formatISO(new Date()),
      likeCounter:0,
      replyCounter:0,
      retweetCounter:0,
      tweetText:this.newTweetForm.get("text")?.value,
      type:'TWEET',
      retweetedBy:[],
      quote:null,
      tweet_id:'',
    }
    data.push(tweetData);
    localStorage.setItem('tweets',JSON.stringify(data));
    this.fetchTweets()
    this.newTweetForm.reset()
  }

}
