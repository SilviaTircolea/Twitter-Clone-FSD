import { Component, OnInit, Input } from '@angular/core';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  faIcon: any;
  faSolidIcon: any;
  isActive: boolean = false;
  @Input() tweet!:any 

  constructor(){
    this.faIcon = faHeart;
    this.faSolidIcon = faSolidHeart;
  }
  ngOnInit(): void {
      
  }

  like(){
    this.isActive = !this.isActive
    this.tweet.likeCounter = this.isActive ? 1 : 0;
  }
}
