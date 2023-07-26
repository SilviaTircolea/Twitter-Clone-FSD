import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { formatISO } from 'date-fns';

@Component({
  selector: 'app-retweet',
  templateUrl: './retweet.component.html',
  styleUrls: ['./retweet.component.css']
})
export class RetweetComponent implements OnInit {
  @Input() tweet!:any 
  showDropdown: boolean = false;
  isOverlay: boolean = false;
  payload: any;
  form: FormGroup;
  isActive: boolean = false;
  userName:any


  constructor(
    private router: Router
  ){
    this.form = new FormGroup({
      text: new FormControl(""),
      firstName: new FormControl(""),
      bio: new FormControl(""),
      location: new FormControl(""),
      personalWebsite: new FormControl(""),
      birthDate: new FormControl(""),
    })
  }
  ngOnInit(): void {
   this.userName  = localStorage.getItem('userName')
  }

  
  hideOverlay(event: Event) {
    if ((event.target as HTMLElement).classList.contains("overlay"))
      this.isOverlay = false;

  }

  showOverlay() {
    this.isOverlay = true;
  }

  retweet() {
    const self = this;
    
    this.isActive = !this.isActive;
  }

  quote(tweet:any) {


    let allTweets = JSON.parse(localStorage.getItem('tweets') || '[]')
    let quoteObj = {
      firstName:this.userName,
      lastName:'',
      username:this.userName,
      duration:formatISO(new Date()),
      likeCounter:0,
      replyCounter:0,
      retweetCounter:0,
      tweetText:this.form.get("text")?.value,
      type:'TWEET',
      retweetedBy:{
        firstName:this.userName,
        lastName:'',
      },
    }
    allTweets[tweet.id-1]['quote'] = quoteObj
    localStorage.setItem('tweets',JSON.stringify(allTweets))
    this.isOverlay = false;
   window.location.reload()
  }

  show(status: boolean) {

    if (status === true && this.showDropdown === true)
      this.showDropdown = false;
    else
      this.showDropdown = status;
  }

}
