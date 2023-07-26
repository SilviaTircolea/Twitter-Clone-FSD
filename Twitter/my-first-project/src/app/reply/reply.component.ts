import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit{
  @Input() tweet!:any 

  isOverlay: boolean = false;
  form: FormGroup;
  isActive: boolean = false;

  constructor(){
    
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
      
  }

  
  hideOverlay(event: Event) {
    if ((event.target as HTMLElement).classList.contains("overlay"))
      this.isOverlay = false;

  }

  showOverlay() {
    this.isOverlay = true;
  }

  reply(){
    this.isOverlay = false;
    this.tweet.replyCounter = this.tweet.replyCounter + 1;
    this.form.reset()
  }
}
